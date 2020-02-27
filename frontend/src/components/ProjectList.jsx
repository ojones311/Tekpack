import React from 'react'

const ProjectList = (props) => {
    const { search, projects, getDetailedProject, deleteProject } = props

    const projectArr = () => {
        if (search.length === 0) {
            return projects.map(proj => (
                (
                    <li className='collection-item' key={proj.projects_id}>
                        <span
                            className='project-name'
                            onClick={() => getDetailedProject(proj.projects_id)}>
                            {proj.projects_id} - {proj.description}
                        </span>
                        <span className='secondary-content'>
                            <i
                                className='small material-icons blue-text darken-3'
                                onClick={() => getDetailedProject(proj.projects_id)}
                            >
                                create
                                </i>
                            <i
                                className='small material-icons red-text darken-4'
                                onClick={() => deleteProject(proj.projects_id)}
                            >delete</i>
                        </span>
                    </li >
                )
            ))
        } else {
            return projects.map(proj => (
                proj.description.substring(0, search.length).toLowerCase() === search.toLowerCase() ?
                    (
                        <li className='collection-item' key={proj.projects_id}>
                            <span
                                className='project-name'
                                onClick={() => getDetailedProject(proj.projects_id)}>
                                {proj.projects_id} - {proj.description}
                            </span>
                            <span className='secondary-content'>
                                <i
                                    className='small material-icons blue-text darken-3'
                                    onClick={() => getDetailedProject(proj.projects_id)}
                                >
                                    create
                                </i>
                                <i
                                    className='small material-icons red-text darken-4'
                                    onClick={() => deleteProject(proj.projects_id)}
                                >delete</i>
                            </span>
                        </li >
                    )
                    : null
            ))
        }
    }

    return (
        <>
            {projectArr()}
        </>
    )
}

export default ProjectList;