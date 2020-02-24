import React from 'react'

const ProjectList = (props) => {
    const { projects, getDetailedProject, deleteProject } = props

    const projectArr = projects.map(proj => (
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
                <i
                    className='small material-icons red-text darken-4'
                    onClick={() => deleteProject(proj.id)}
                >delete</i>
            </span>
        </li>
    ))

    return (
        <>
            {projectArr}
        </>
    )
}

export default ProjectList;