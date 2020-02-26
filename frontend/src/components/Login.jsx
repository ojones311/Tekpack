import React, { Component } from 'react'
import pic from '../assets/download.png'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'
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

    // getAllUsers = async () =>{
    //     try{
    //         let res = await axios.get('http://localhost:3100/api/users/all')
    //         console.log(res.data.payload)


    //     }catch(err){
    //         console.log(err)

    //     }
    // }

    componentDidMount = async () => {
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

        if ((userEmail === email) && (userPassWord === password)) {
            console.log("login successfull")
        } else {
            console.log("un-successful login")
        }

        // try {
        //     let res = await axios.get('http://localhost:3100/api/users/all')
        //     console.log(res.data.payload)


        // } catch (err) {
        //     console.log(err)

        // }
    }



    render() {
        let { email, password } = this.state
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

export default Login
