import React, {Component} from 'react'
import pic from '../assets/download.png'


class SignIn extends Component{
    constructor(){
        super()
        this.state = {
            username: "",
            password: ""
        }
    }

    componentDidMount(){
        console.log("Sign in component mounted")
    }

    render(){
        return(
            <div className = "SignIn-Page">
                <img src = {pic}  alt = "brokenLink"/>

                <form>
                    <button>Sign In</button>
                    <button>Sign Up</button>
                    <input 
                    type = "text"
                    placeholder = "Email" 
                    required/>
                    <input 
                    type = "text"
                    placeholder = "password" 
                    required/>


                </form>

            </div>
        )
    }
}

export default SignIn
