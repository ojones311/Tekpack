import React, { Component } from 'react'
import pic from '../assets/download.png'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'


class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: ""
        }
    }

    componentDidMount() {
        console.log("Log in component mounted")
    }

    handleChange = (e) => {
        console.log(`${e.target.name}: value: ${e.target.value}`)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        let { email, password } = this.state
        return (
            <div className="Login-Page">
                <img src={pic} alt="brokenLink" />
                <h1>Log In Component</h1>

                <form>

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
                        required /><br/>

                    <Button variant="outlined" color="primary">Sign In</Button><br/>
                    <Button variant="outlined" color="primary">Sign up</Button>
                </form>

            </div>
        )
    }

}

export default Login
