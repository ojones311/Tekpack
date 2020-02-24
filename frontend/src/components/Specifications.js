import React from 'react'
import SpecForm from './SpecForm'

const Specifications = (props) => {
    const projectId = props.match.params.id;
    console.log(`Specifications props: `, props)
    return (
        <div>
            <h1>Specifications</h1>
            <p>Project id: {projectId}</p>
            <SpecForm projectId={projectId} />
        </div>
    )
}

export default Specifications
