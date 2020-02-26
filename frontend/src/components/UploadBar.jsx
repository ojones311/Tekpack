import React from 'react'

const UploadBar = (props) => {

    return (
        <div className="progress">
            <div className="determinate" style={{ width: `${props.progress}%` }}></div>
        </div>
    )
}

export default UploadBar