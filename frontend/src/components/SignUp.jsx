import React, { Component } from 'react'
import pic from '../assets/download.png'
import { Link, withRouter } from 'react-router-dom'



class SignUp extends Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: ""
        }
    }

    componentDidMount() {
        console.log("Sign Up component mounted")
    }

    handleChange = (e) => {
        console.log(`${e.target.name}: value: ${e.target.value}`)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.props.log(true)
        this.props.history.push("/projects")
    }

    render() {
        let { email, password } = this.state
        return (
            <div className="Login-Page">
                {/* <img src={pic} alt="brokenLink" /> */}
                <h1>Sign Up</h1>

                <form onSubmit = {this.handleFormSubmit}>

                    <input
                        type="text"
                        placeholder="Email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        required 
                    />

                    <input
                        type="text"
                        placeholder="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        required 
                    />

                    <br />


                    <button class="btn waves-effect waves-light red" type="submit" name="action">Sign Up
                    {/* <i class="material-icons right">send</i> */}
                    </button>
                </form>

                <br />

                <Link to='/login'>
                    <button class="btn waves-effect waves-light blue" type="submit" name="action">Log In
                    {/* <i class="material-icons right">send</i> */}
                    </button></Link>

            </div>
        )
    }

}
export default withRouter(SignUp)
