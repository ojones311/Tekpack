import React, { Component } from 'react'
import pic from '../assets/download.png'
import { Link } from 'react-router-dom'


class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: ""
        }
    }

    componentDidMount() {
        console.log("Sign in component mounted")
    }

    handleChange = (e) => {
        console.log(`${e.target.name}: value: ${e.target.value}`)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        let {email, password} = this.state
        return (
            <div className="Login-Page">
                <img src={pic} alt="brokenLink" />

                <form>
                    <button>Sign In</button>
                    <button>Sign Up</button>

                    <input
                        type="text"
                        placeholder="Email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        required />


                    <input
                        type="text"
                        placeholder="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        required />

                </form>
                <Link to='/signup'><button>Sign Up</button></Link>

            </div>
        )
    }

}

export default Login
