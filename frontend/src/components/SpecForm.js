import React, { useState } from 'react'

const SpecForm = (props) => {
    const [form, setForm] = useState({
        'Shirt Length': '25in',
        'Shirt Width': '14in',
        'Collar Length': '',
        'Arm width Left': '',
        'Arm width Right': '',

    })
    const [url, setUrl] = useState('https://help.printsome.com/wp-content/uploads/2019/10/T-SHIRT-CHART-SIZES.png')
    const { projectId } = props

    const specs = () => {
        const obj = Object.keys(form)
        return (
            <div className='col s6'>
                {obj.map(key => (
                    <label>
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

    const changeImage = (e) => {
        setUrl(e.target.value)
    }

    const designImg = (e) => (
        <div className='design-img col s6'>
            {url ? <img src={url} className=''/> : null}
            <label>
                Product Design
                <input type='text' onSubmit={changeImage} placeholder='Image url...' />
            </label>
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