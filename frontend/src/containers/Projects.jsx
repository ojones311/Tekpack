import React from 'react'
// import { Switch, Link, Route } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import Specifications from '../components/Specifications'
import Overview from '../components/Overview'

const Projects = (props) => {
    console.log(`Projects props: `, props)
    return (
        <div>
            {/* <h1>Projects Components</h1> */}
            {
                props.match.params.id ?
                    <Specifications state={props} />
                    :
                    <Overview state={props} />
            }

            {/* <Switch>
                <Route to='/deatiled' component={} />
                <Route to='/overview' component={} />
            </Switch> */}
        </div>
    )
}

export default withRouter(Projects)