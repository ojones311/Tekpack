import React, { useEffect, useState } from 'react'
import SpecForm from './SpecForm'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

const Specifications = (props) => {
    const projectId = props.match.params.id;
    console.log(`Specifications props: `, props)
    const [specs, setSpecs] = useState({})

    // useEffect(() => {
    //     const getSpecs = async () => {
    //         const { data: { payload }} = axios.get(`/projects/${projectId}`)
    //         console.log(payload)
    //     }
    //     getSpecs()
    // }, [])

    return (
        <div>
            <h1>Specifications</h1>
            <p>Project id: {projectId}</p>
            <SpecForm projectId={projectId} state={props.state}/>
        </div>
    )
}

export default withRouter(Specifications)
