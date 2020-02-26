import React from 'react'
import ProjectTemplate from "./ProjectTemplate"
import { Switch, Link, Route } from 'react-router-dom'
import Specifications from '../components/Specifications'
import Overview from '../components/Overview'

const Projects = (props) => {
    console.log(props)
    return (
        <div>
            {/* <h1>Projects Components</h1> */}
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