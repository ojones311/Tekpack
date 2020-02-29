import React from 'react'
import { Link } from 'react-router-dom'

const Home = (props) => {
    // const route = props.match.path
    return (
        <div className='center-align'>
            <br />
            <button className='btn red white-text'>
                <Link to='/login' className='white-text'>Login</Link>
            </button>

            <br />
            <br />

            <button className='btn red white-text'>
                <Link to='/signup' className='white-text'>Signup</Link>
            </button>
        </div>
    )
}

export default Home
