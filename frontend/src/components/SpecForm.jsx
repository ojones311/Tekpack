import React, { useState } from 'react'
import { storage } from '../firebase/firebase'
import UploadBar from './UploadBar'
import UploadForm from './UploadForm'

const SpecForm = (props) => {
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
        progress: 0
    })
    const { projectId } = props

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
        const uploadTask = storage.ref(`images/${img.name}`).put(img)

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
                storage.ref(`images`).child(img.name).getDownloadURL()
                    .then(newUrl => {
                        // Add/Update image url to backend
                        setUrl({ ...url, url: newUrl })
                    })
            }
        )
    }

    console.log(url)

    const designImg = (e) => (
        <div className='design-img col s6'>
            {url.url ? <img src={url.url} className='design-img-display' alt='Design Sketch' /> : null}

            { url.progress > 0 ? <UploadBar progress={url.progress} /> : null }

            <UploadForm fileChange={fileChange} />

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

export default SpecForm