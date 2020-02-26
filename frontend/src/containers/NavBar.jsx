import React, { useState } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import 'materialize-css'

const NavBar = (props) => {
    const [state, setState] = useState({
        showHamburger: false
    })

    const route = props.location.pathname

    const menuList = [
        { name: 'Home', path: '/home', icon: 'home' },
        { name: 'Projects', path: '/projects', icon: 'view_list' },
        { name: 'About', path: '/about', icon: 'info' }
    ]

    const hamburgerMenu = (arr) => {
        const listItems = arr.map(item => (
            <NavLink to={item.path} className='hamburger-item'>
                <li
                    onClick={() => showMenu()}
                    className='collection-item'
                >
                    <span className='secondary-content left'>
                        <i class="small material-icons">{item.icon}</i>
                    </span>
                    {item.name}
                </li>
            </NavLink>
        ));

        return (
            <ul className="hamburger">
                {listItems}
            </ul>
        )
    }

    const showMenu = () => setState({
        showHamburger: !state.showHamburger
    })

    console.log(state)

    return (
        <nav className="nav-wrapper red">
            <div className='container'>
                <NavLink to='/home' className='brand-logo'>TekPack</NavLink>
                <a
                    href={false}
                    data-target="mobile-demo"
                    className="sidenav-trigger">
                    <i
                        className="material-icons"
                        onClick={showMenu}
                    >
                        menu
                    </i>
                </a>
                {props.isLoggedIn ?
                    state.showHamburger ?
                        hamburgerMenu(menuList)
                        : null
                    :
                    state.showHamburger ?
                        hamburgerMenu([{ name: 'Home', path: '/home', icon: 'home' }])
                        : null
                }

                < ul className='right hide-on-med-and-down'>
                    <li className={route.slice(0, 5) === '/home' ? 'active' : ''}><NavLink to='/'>Home</NavLink></li>
                    {props.isLoggedIn ?
                        <>
                            <li className={route.slice(0, 9) === '/projects' ? 'active' : ''}><NavLink to='/projects'>Projects</NavLink></li>
                            <li className={route.slice(0, 6) === '/about' ? 'active' : ''}><NavLink to='/about'>About</NavLink></li>
                        </>
                        : null
                    }
                </ul>
            </div>
        </nav >
    )
}

export default withRouter(NavBar)