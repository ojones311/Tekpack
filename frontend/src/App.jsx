import React, { Component } from 'react';
import './App.css';
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp'
import NavBar from './containers/NavBar'
import Home from './containers/Home'
import About from './containers/About'
import Projects from './containers/Projects'
import NewProject from './containers/NewProjects'
import 'materialize-css'

class App extends Component {
  state = {
    loggedIn: true,
    currentRoute: '/home'
  }

  privateRoutes = () => (
    <Switch>
      <Route path='/login' component={Login} />
      <Route path='/signup' component={SignUp} />
      <Route path='/projects' exact component={Projects} />
      <Route path='/projects/new' component={NewProject} />
      <Route path='/home' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/projects/:id' component={Projects} />
      <Redirect from='/' to='/home' />
    </Switch>
  )

  publicRoutes = () => (
    <Switch>
      <Route path='/login' component={Login} />
      <Route path='/signup' component={SignUp} />
      <Route path='/home' component={Home} />
      <Redirect from='/' to='/home' />
    </Switch>
  )

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar isLoggedIn={this.state.loggedIn} />
          {/* <Login /> */}
          <div className='container'>
            {
              this.state.loggedIn ?
                this.privateRoutes()
                : this.publicRoutes()
            }
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
