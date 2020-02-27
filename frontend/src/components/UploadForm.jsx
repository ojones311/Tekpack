import React from 'react'

const UploadForm = (props) => {

    return (
        <div className="file-field input-field">
            <div className="btn">
                <span>File</span>
                <input 
                    type="file"
                    onChange={props.fileChange}
                    accept=".jpg, .png, .jpeg"
                    size='2000000'
                />
            </div>
            <div className="file-path-wrapper">
                <input className="file-path validate" type="text" placeholder='Click file to choose' />
            </div>
            { props.error ? 
                <p>File Size exceeds 2MB Limit!</p>
                :
                null
            }
        </div>
    )
}

export default UploadForm