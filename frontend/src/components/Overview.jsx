import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ProjectList from './ProjectList'
import { withRouter } from 'react-router-dom'

const Overview = (props) => {
    console.log(`Overview props: `, props)
    const [projects, setProjects] = useState([
        // { id: 1, name: 'T-Shirt' },
        // { id: 2, name: 'Jeans' },
        // { id: 3, name: 'Sweater' },
        // { id: 4, name: 'Gloves' }
    ])

    useEffect(() => {
        const getAllProjects = async () => {
            try {
                // GET PROJECTS BY USER ID
                // const { data: { payload }} = await axios.get(`/projects/specs/${props.user_id}`)
                const { data: { payload }} = await axios.get(`/projects/all`)
                setProjects(payload)
            } catch (err) {
                console.log(err)
            }
        }
        getAllProjects();
    }, [])

    const [search, setSearch] = useState('')

    const getDetailedProject = (id) => props.history.push(`/projects/${id}`)

    const deleteProject = async (id) => {
        console.log(`Project ${id} deleted!`)
        const newList = projects.filter(proj => proj.projects_id !== id)
        // Make Request to backend to delete a project
        // If success show new list
        // If error display error
        try {
            const data = await axios.delete(`http://localhost:3100/api/projects/project/${id}`)
            console.log(data)
        } catch (err) {
         console.log('err',err)
        }
        setProjects(newList)
    }

    const goToNewProject = () => props.history.push(`/projects/new`)

    const searchProjects = (e) => setSearch(e.target.value)

    return (
        <div className='project-overview'>
            <h1 className='center'>Overview component</h1>

            <div className='row valign-wrapper'>
                <div className="input-field col s6 pull-s1">
                    <i className="material-icons prefix">search</i>
                    <input
                        type='text'
                        id="icon_prefix"
                        className="validate"
                        onChange={searchProjects}
                    ></input>
                    <label htmlFor="icon_prefix">Search Projects</label>
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
                {
                    projects.length ?
                        <ProjectList
                            search={search}
                            projects={projects}
                            getDetailedProject={getDetailedProject}
                            deleteProject={deleteProject}
                        />
                        : null
                }
            </ul>
        </div>
    )
}

export default withRouter(Overview)