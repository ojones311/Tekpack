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
    const [form, setForm] = useState({
        'Shirt Length': '25in',
        'Shirt Width': '14in',
        'Collar Length': '',
        'Arm width Left': '',
        'Arm width Right': '',
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
                const { data: { payload }} = await axios.get(`/measurements/project/${projectId}`)
                console.log(`Form measurements: `, payload )
            } catch (err) {
                console.log(err)
            }
        }
        getSpecs()
    }, [])

    const specs = () => {
        const obj = Object.keys(form)
        return (
            <div className='col s6'>
                {obj.map(key => (
                    <label key={key}>
                        {key}
                        <input
                            type='text'
                            name={key}
                            value={form[key]}
                            className='formInput'
                            onChange={e => setForm({ ...form, [e.target.name]: e.target.value })}
                        />
                    </label>
                ))}
            </div>
        )
    }

    const fileChange = e => {
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
                    .then(newUrl => {
                        // Add/Update image url to backend
                        // const res = await axios.put(`/${projectId}`, newUrl)
                        setUrl({ form: null, url: newUrl, progress: 0, error: false })
                    })
            }
        )
    }

    const submitSpecForm = async () => {
        // Check if all fields are filled if not display error and return
        // Else proceed to posting it to the backend
        // On success push them/display success component which shows url link, excel download link, and QR code to url link
    }

    console.log(url)

    const designImg = (e) => (
        <div className='design-img col s6'>
            {url.url ? <img src={url.url} className='design-img-display' alt='Design Sketch' /> : null}

            { url.progress > 0 ? <UploadBar progress={url.progress} /> : null }

            <UploadForm fileChange={fileChange} error={url.error} />

            <button className='btn' onClick={uploadImage}>Upload</button>
        </div>
    )

    return (
        <div>
            <h1>Spec for {projectId}</h1>
            <div className='row'>
                {specs()}
                {designImg()}
            </div>
        </div>
    )
}

export default withRouter(SpecForm)