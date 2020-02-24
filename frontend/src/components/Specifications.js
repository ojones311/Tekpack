import React from 'react'

const Specifications = (props) => {
    const projectId = props.match.params.id;
    console.log(`Specifications props: `, props)
    return (
        <div>
            <h1>Specifications</h1>
            <p>Project id: {projectId}</p>
        </div>
    )
}

export default Specifications