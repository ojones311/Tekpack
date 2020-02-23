import React from 'react'
import ProjectTemplate from "./ProjectTemplate"
import { Switch, Link, Route } from 'react-router-dom'
import Specifications from '../components/Specifications'
import Overview from '../components/Overview'

const Projects = (props) => {
    console.log(props)
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
            {
                props.match.params.id ?
                    <Specifications {...props} />
                    :
                    <Overview {...props} />
            }

            {/* <Switch>
                <Route to='/deatiled' component={} />
                <Route to='/overview' component={} />
            </Switch> */}
        </div>
    )
}

export default Projects