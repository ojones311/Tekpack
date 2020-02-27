import React from 'react'
import { withRouter } from 'react-router-dom'
import Specifications from '../components/Specifications'
import Overview from '../components/Overview'

const Projects = (props) => {
    console.log(`Projects props: `, props)
    return (
        <div>
            {
                props.match.params.id ?
                    <Specifications state={props.state} />
                    :
                    <Overview state={props.state} />
            }
        </div>
    )
}

export default withRouter(Projects)