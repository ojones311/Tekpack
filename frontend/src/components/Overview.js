import React from 'react'

const Overview = (props) => {
    const projects = [
        { id: 1, name: 'T-Shirt' },
        { id: 2, name: 'Jeans' },
        { id: 3, name: 'Sweater' }
    ]

    const getDetailedProject = (id) => {
        props.history.push(`/projects/${id}`)
    }

    return (
        <div>
            <h1>Overview component</h1>
            <ul className='collection with-header'>
                <li className='collection-header'>
                    <h3>Projects</h3>
                </li>
                {
                    projects.map(proj => (
                        <li className='collection-item'>
                            {proj.id} - {proj.name}
                            <span
                                className='secondary-content'
                                onClick={() => getDetailedProject(proj.id)}>
                                <i className='material-icons'>send</i>
                            </span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Overview