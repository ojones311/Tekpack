import React, { Component } from 'react'
import pic from '../assets/download.png'
import { Link } from 'react-router-dom'


class SignUp extends Component {
    constructor() {
        super()
        this.state = {
            username: "",
            password: ""
        }
    }

    componentDidMount() {
        console.log("Signup component mounted")
    }

    render() {
        return (
            <div className="SignUp-Page">
                <img src={pic} alt="brokenLink" />

                <form>
                    <button>Sign Up</button>
                    <input
                        type="text"
                        placeholder="Email"
                        required />
                    <input
                        type="text"
                        placeholder="password"
                        required />
                </form>

                <Link to='/login'><button>Login</button></Link>
            </div>
        )
    }
}

export default SignUp
