import React, { useState } from 'react'
import ProjectList from './ProjectList'

const Overview = (props) => {

    const [projects, setProjects] = useState([
        { id: 1, name: 'T-Shirt' },
        { id: 2, name: 'Jeans' },
        { id: 3, name: 'Sweater' }
    ])

    const getDetailedProject = (id) => {
        props.history.push(`/projects/${id}`)
    }

    const deleteProject = (id) => {
        const newList = projects.filter(proj => proj.id !== id)
        // Make Request to backend to delete a project
        // If success show new list
        // If error display error
        setProjects(newList)
    }

    return (
        <div className='project-overview'>
            <h1>Overview component</h1>
            <ul className='collection with-header'>
                <li className='collection-header'>
                    <h3>Projects</h3>
                </li>
                <ProjectList
                    projects={projects}
                    getDetailedProject={getDetailedProject}
                    deleteProject={deleteProject}
                />
                {/* {
                    projects.map(proj => (
                        <li className='collection-item'>
                            <span
                                className='project-name'
                                onClick={() => getDetailedProject(proj.id)}>
                                {proj.id} - {proj.name}
                            </span>
                            <span
                                className='secondary-content'
                            >
                                <i
                                    className='small material-icons blue-text darken-3'
                                    onClick={() => getDetailedProject(proj.id)}
                                >
                                    create
                                </i>
                                <i className='small material-icons red-text darken-4'>delete</i>
                            </span>
                        </li>
                    ))
                } */}
            </ul>
        </div>
    )
}

export default Overview