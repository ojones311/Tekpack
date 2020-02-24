import React, { useState } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import 'materialize-css'

const NavBar = (props) => {
    const [state, setState] = useState({
        showHamburger: false
    })

    const route = props.location.pathname

    const hamburgerMenu = () => (
        <ul class="hamburger">
            <li><NavLink to="/home">Home</NavLink></li>
            <li><NavLink to='/projects'>Projects</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
        </ul>
    )

    const showMenu = () => setState({
        showHamburger: !state.showHamburger
    })

    console.log(state)

    return (
        <nav className="nav-wrapper red">
            <div className='container'>
                <NavLink to='/' className='brand-logo'>TekPack</NavLink>
                <a

                    data-target="mobile-demo"
                    className="sidenav-trigger">
                    <i
                        className="material-icons"
                        onClick={showMenu}
                        onMouse={showMenu}
                    >
                        menu
                    </i>
                    {/* <div className='hamburger'>
                        <p>1</p>
                        <p>1</p>
                        <p>1</p>
                    </div> */}
                </a>
                {state.showHamburger ? hamburgerMenu() : null}
                <ul className='right hide-on-med-and-down'>
                    <li className={route.slice(0, 5) === '/home' ? 'active' : ''}><NavLink to='/'>Home</NavLink></li>
                    <li className={route.slice(0, 9) === '/projects' ? 'active' : ''}><NavLink to='/projects'>Projects</NavLink></li>
                    <li className={route.slice(0, 6) === '/about' ? 'active' : ''}><NavLink to='/about'>About</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(NavBar)