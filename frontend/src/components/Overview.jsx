import React, { useState } from 'react'
import ProjectList from './ProjectList'

const Overview = (props) => {
    const [projects, setProjects] = useState([
        { id: 1, name: 'T-Shirt' },
        { id: 2, name: 'Jeans' },
        { id: 3, name: 'Sweater' },
        { id: 4, name: 'Gloves' }
    ])

    const [search, setSearch] = useState('')

    const getDetailedProject = (id) => props.history.push(`/projects/${id}`)

    const deleteProject = (id) => {
        console.log(`Project ${id} deleted!`)
        const newList = projects.filter(proj => proj.id !== id)
        // Make Request to backend to delete a project
        // If success show new list
        // If error display error
        setProjects(newList)
    }

    const goToNewProject = () => props.history.push(`/projects/new`)

    const searchProjects = (e) => setSearch(e.target.value)

    return (
        <div className='project-overview'>
            <h1 className='center'>Overview component</h1>

            <div className='row valign-wrapper'>
                {/* <div class="progress">
                <div class="indeterminate"></div>
                </div> */}
                <div className="input-field col s6 pull-s1">
                    <i className="material-icons prefix">search</i>
                    <input 
                        type='text' 
                        id="icon_prefix" 
                        className="validate"
                        onChange={searchProjects}
                    ></input>
                    <label for="icon_prefix">Search Projects</label>
                    {/* <input type='text' placeholder='Search...'/> */}
                </div>
                <button 
                    className='btn red project-new col s4' 
                    onClick={goToNewProject}>
                    <i className="material-icons right">add_circle</i>
                    New Project
                </button>
            </div>

            <ul className='collection with-header'>
                <li className='collection-header'>
                    <h3>Projects</h3>
                </li>
                <ProjectList
                    search={search}
                    projects={projects}
                    getDetailedProject={getDetailedProject}
                    deleteProject={deleteProject}
                />
            </ul>
        </div>
    )
}

export default Overview