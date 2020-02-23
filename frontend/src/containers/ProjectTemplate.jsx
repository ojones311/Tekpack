import React from 'react'
import {Link} from 'react-router-dom'


const ProjectTemplate = (props) => {
    return (
        <div>
            <p id = "project-name">{props.name}</p>
            {/*toDo add links and projects when where able to pull data */}
            <Link to ="" >{props.name}</Link>
        </div>
    )
}

export default ProjectTemplate