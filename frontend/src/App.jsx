import React, { Component } from 'react';
import './App.css';
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp'
import NavBar from './containers/NavBar'
import Home from './containers/Home'
import About from './containers/About'
import Projects from './containers/Projects'
import 'materialize-css'
import * as firebase from 'firebase'

const config = {
  apiKey: "AIzaSyAn2fkKKNOF_yApAfxYeTVCvJ8eWb64dS0",
  authDomain: "tekpack-12321.firebaseapp.com",
  databaseURL: "https://tekpack-12321.firebaseio.com",
  projectId: "tekpack-12321",
  storageBucket: "tekpack-12321.appspot.com",
  messagingSenderId: "142712573474",
  appId: "1:142712573474:web:f50d1b5d97998b590c047b",
  measurementId: "G-WRLTKN3Z5C"
}

firebase.initializeApp(config)

class App extends Component {
  state = {
    loggedIn: false,
    currentRoute: '/home'
  }

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          {/* <Login /> */}
          <div className='container'>
            <Switch>
              <Route path='/login' component={Login} />
              <Route path='/signup' component={SignUp} />
              <Route path='/projects' exact component={Projects} />
              <Route path='/home' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/projects/:id' component={Projects} />
              <Redirect from='/' to='/home' />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
