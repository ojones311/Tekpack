import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { storage } from '../firebase/firebase'
import UploadBar from './UploadBar'
import UploadForm from './UploadForm'
import axios from 'axios'

const SpecForm = (props) => {
    // const projectId = props.match.params.id;
    console.log(`SpecForm props: `, props)
    // console.log(`SpecForm project id: `, projectId)
    // const [form, setForm] = useState({
    //     'Shirt Length': '25in',
    //     'Shirt Width': '14in',
    //     'Collar Length': '',
    //     'Arm width Left': '',
    //     'Arm width Right': '',
    // })
    const [form, setForm] = useState({
        formData: null,
        name: null,
        projectId: null,
        userId: null,
        lastEdit: null,
        formSaved: true
    })

    const [url, setUrl] = useState({
        form: null,
        url: 'https://help.printsome.com/wp-content/uploads/2019/10/T-SHIRT-CHART-SIZES.png',
        progress: 0,
        error: false
    })

    const { projectId } = props

    useEffect(() => {
        const getSpecs = async () => {
            try {
                const { data: { payload } } = await axios.get(`/measurements/project/${projectId}`)
                console.log(`Form measurements: `, payload)
                // setForm({
                //     form: {
                //         formData: payload.form_data,
                //         name: payload.description,
                //         projectsId: payload.projects_id
                //     },
                //     url: {

                //     }
                // })
                const formData = JSON.parse(payload.form_data)
                setForm({
                    formData,
                    name: payload.description,
                    projectsId: payload.projects_id,
                    userId: payload.users_id
                })

                setUrl({
                    ...url,
                    url: payload.img_url
                })
            } catch (err) {
                console.log(err)
            }
        }
        getSpecs()
    }, [])

    // console.log(`Specs form`, form)
    // console.log(`Specs url`, url)

    const specs = () => {
        const obj = Object.keys(form.formData)
        return (
            <div className='col s6'>
                {obj.map((key, i) => (
                    <>
                        <label
                            key={key}
                            contentEditable
                            onKeyDown={handleLabelEdit}
                            onClick={handleLabelClick}
                        >
                            {key}
                        </label>
                        <input
                            type='text'
                            name={key}
                            value={form.formData[key]}
                            className='formInput'
                            onChange={e => setForm({ ...form, formData: { ...form.formData, [e.target.name]: e.target.value }, formSaved: false })}
                        />
                        {/* { i === obj.length - 1 ?
                            <button 
                                className='btn'
                                onClick={() => setForm({ ...form, formData: {...form.formData, 'Edit me': '' }, formSaved: false})}
                            >Add</button>
                            : null
                        } */}
                    </>
                ))}
            </div>
        )
    }

    const fileChange = e => {
        if (form.formData) {
            // setForm({ ...form, ))
        }
        if (e.target.files[0]) {
            console.log(`File changed`, e.target.files[0])
            setUrl({ ...url, form: e.target.files[0] })
        }
    }

    const uploadImage = async () => {
        console.log(`Upload image`)
        const img = url.form

        if (url.form.size > 2000000) {
            setUrl({ ...url, error: true })
            return
        }

        const uploadTask = storage.ref(`images/${props.state.user_id}/${img.name}`).put(img) // Add images/userid/...

        uploadTask.on('state_changed',
            snapshot => {
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
                console.log(progress + '%')
                setUrl({ ...url, progress })
            },
            error => {
                console.log(error)
            },
            completed => {
                storage.ref(`images/${props.state.user_id}`).child(img.name).getDownloadURL()
                    .then(async newUrl => {
                        console.log(`NEW URL`, newUrl)
                        // Add/Update image url to backend
                        // const res = await axios.put(`/${projectId}`, newUrl)
                        const res = await axios.patch(`http://localhost:3100/api/projects/update/img/${projectId}`, { url: newUrl })
                        console.log(`Image upload to backend`, res)
                        setUrl({ form: null, url: newUrl, progress: 0, error: false })
                    })
            }
        )
    }

    console.log(url)
    console.log({ form })

    const designImg = (e) => (
        <div className='design-img col s6'>
            {url.url ? <img src={url.url} className='design-img-display' alt='Design Sketch' /> : null}

            {url.progress > 0 ? <UploadBar progress={url.progress} /> : null}

            <UploadForm fileChange={fileChange} error={url.error} />

            <button className='btn' onClick={uploadImage}>Upload</button>
        </div>
    )

    const handleSubmit = async () => {
        console.log(`Submit button clicked`)
        console.log(form)
        try {
            await axios.patch(`http://localhost:3100/api/projects/update/form/${projectId}`, {formData: form.formData, name: form.name})
            console.log('Form submitted')
            setForm({ ...form, formSaved: true })
        } catch (error) {
            console.log('err', error)
        }
    }

    const handleLabelEdit = (e) => {
        console.log(e.keyCode)
        // console.log(e.detail)
        // console.log(e.locale)
        console.log(e.currentTarget.innerText)
        // console.dir(e.target)
        if (e.keyCode === 13) {
            const formCopy = { ...form }
            formCopy.formData[e.currentTarget.innerText] = form.formData[form.lastEdit]
            delete formCopy.formData[form.lastEdit]
            setForm({ ...formCopy, formSaved: false })
            e.target.blur()
        } else if (e.keyCode >= 65 && e.keyCode <= 90) {
            console.log(`valid key`, e.key)
        }
    }

    const handleLabelClick = (e) => {
        console.dir(e.target.innerText)
        setForm({ ...form, lastEdit: e.target.innerText })
    }

    return (
        <div>
            <h1
                className='center-align'
                contentEditable
                onKeyDown={e => {
                    if (e.keyCode === 13) {
                        console.log(e.currentTarget.innerText)
                        setForm({ ...form, name: e.currentTarget.innerText })
                        e.target.blur()
                    }
                }}
            >{form.name}</h1>

            <div className='row'>
                {form.formData ? specs() : null}
                {designImg()}
            </div>
            <button className={form.formSaved ? 'btn green ' : 'btn red '} onClick={handleSubmit}>
                { form.formSaved ? 'Save 😁' :  'Save 😬' }
            </button>
        </div>
    )
}

export default withRouter(SpecForm)