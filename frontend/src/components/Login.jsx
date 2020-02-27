import React, { Component } from 'react'
import pic from '../assets/download.png'
import { withRouter } from 'react-router-dom'
import axios from 'axios'


class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: "",
            userEmail: 'OJones@project.com',
            userPassWord: 1234567890
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

    handleFormSubmit = async (e) => {
        e.preventDefault();
        let { email, userEmail, password, userPassWord } = this.state;

        if ((userEmail === email) && (userPassWord.toString() === password)) {
            console.log("login successfull")
            this.props.history.push("/projects")
        } else {
            console.log("un-successful login")
        }
    }



    render() {
        let { email,userEmail,userPassWord, password } = this.state
        console.log(`${userEmail}, ${userPassWord}`)
        return (
            <div className="Login-Page">
                <img src={pic} alt="brokenLink" />
                <h1>Log In Component</h1>

                <form onSubmit={this.handleFormSubmit}>

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

                    <br />

                    <button class="btn waves-effect waves-light" type="submit" name="action">Log In
                    <i class="material-icons right">send</i>
                    </button>


                    {/* <Button variant="outlined" color="primary">Sign In</Button><br /> */}
                    {/* <Button variant="outlined" color="primary">Sign up</Button> */}
                </form>

            </div>
        )
    }

}

export default withRouter(Login)
