import React from 'react'
import ProjectTemplate from "./ProjectTemplate"

const Projects = (props) => {
    return (
        <div>
            <h1>Projects Components</h1>
            <h2>Projects Components</h2>

            <form className = "search-box">
                <input id = "search-bar" type = "text" placeholder = "Search.."/>
            </form>
            
            <div className = "Projects_Container">
                <h2>Projects</h2>
                <ProjectTemplate name = "project 1"/>

            </div>
        </div>
    )
}

export default Projects