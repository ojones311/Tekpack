import React, { Component } from 'react';
import './App.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp'
import NavBar from './containers/NavBar'
import Home from './containers/Home'
import Projects from './containers/Projects'

class App extends Component {
  state = {
    loggedIn: false,
  }

  render() {
    return (
      <Router className="App">
        <NavBar />
        <h1>This is the main app.</h1>
        {/* <Login /> */}
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/signup' component={SignUp} />
          <Route path='/projects' component={Projects} />
          <Route path='/' component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
