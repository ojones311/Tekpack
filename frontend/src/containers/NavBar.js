import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import 'materialize-css'

const NavBar = (props) => {
    const route = props.location.pathname
    return (
        <nav className="nav-wrapper red">
            <NavLink to='/' className='brand-logo'>TekPack</NavLink>
            <ul className='right hide-on-sm-and-down'>
                <li className={route.slice(0, 5) === '/home' ? 'active' : ''}><NavLink to='/'>Home</NavLink></li>
                <li className={route.slice(0, 9) === '/projects' ? 'active' : ''}><NavLink to='/projects'>Projects</NavLink></li>
                <li className={route.slice(0, 6) === '/about' ? 'active' : ''}><NavLink to='/about'>About</NavLink></li>
            </ul>
        </nav>
    )
}

export default withRouter(NavBar)