import React, { Component } from 'react'
import pic from '../assets/download.png'
import { withRouter, Link } from 'react-router-dom'


class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: "",
            userEmail: 'owen@pursuit.org',
            userPassWord: 1234
        }
    }

    componentDidMount = () => {
        console.log("Log in component mounted")
        // this.getAllUsers()
    }

    handleChange = (e) => {
        console.log(`${e.target.name}: value: ${e.target.value}`)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        let { email, userEmail, password, userPassWord } = this.state;

        if ((userEmail === email) && (userPassWord.toString() === password)) {
            console.log("login successfull")
            this.props.log(true)
            this.props.history.push("/projects")
        } else {
            console.log("un-successful login")
        }
    }



    render() {
        let { email, userEmail, userPassWord, password } = this.state
        console.log(`${userEmail}, ${userPassWord}`)
        return (
            <div className="Login-Page">
                {/* <img src={pic} alt="brokenLink" /> */}
                <h1>Log In</h1>

                <form onSubmit={this.handleFormSubmit}>

                    <input
                        type="text"
                        placeholder="Email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        required />


                    <input
                        type="password"
                        placeholder="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        required />

                    <br />

                    <button class="btn waves-effect waves-light red" type="submit" name="action">Log In
                    {/* <i class="material-icons right">send</i> */}
                    </button>
                </form>

                <br />

                <Link to='/signup'>
                    <button class="btn waves-effect waves-light blue" type="submit" name="action">Sign Up
                    {/* <i class="material-icons right">send</i> */}
                    </button></Link>

            </div>
        )
    }

}

export default withRouter(Login)
