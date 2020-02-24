import React from 'react'
import { Link } from 'react-router-dom'

const Home = (props) => {
    const route = props.match.path
    console.log(route)
    return (
        <div>
            <h1>Home components</h1>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Signup</Link>
        </div>
    )
}

export default Home