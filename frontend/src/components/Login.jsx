import React, { Component } from 'react'
import pic from '../assets/download.png'
import { Link } from 'react-router-dom'


class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: "",
            password: ""
        }
    }

    componentDidMount() {
        console.log("Sign in component mounted")
    }

    render() {
        return (
            <div className="Login-Page">
                <img src={pic} alt="brokenLink" />

                <form>
                    <button>Login</button>
                    <input
                        type="text"
                        placeholder="Email"
                        required />
                    <input
                        type="text"
                        placeholder="password"
                        required />
                </form>
                <Link to='/signup'><button>Sign Up</button></Link>

            </div>
        )
    }
}

export default Login
