import React from 'react'

const UploadForm = (props) => {

    return (
        <div className="file-field input-field">
            <div className="btn">
                <span>File</span>
                <input type="file" onChange={props.fileChange} />
            </div>
            <div className="file-path-wrapper">
                <input className="file-path validate" type="text" placeholder='Click file to choose' />
            </div>
        </div>
    )
}

export default UploadForm