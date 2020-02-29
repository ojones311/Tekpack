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
    loggedIn: false,
    user_id: 1,
  }

  privateRoutes = () => (
    <Switch>
      <Route path='/login' component={props => <Login state={this.state} log={this.userLoggedIn} />} />
      <Route path='/signup' component={props => <SignUp state={this.state} />} />
      <Route path='/projects' exact component={props => <Projects state={this.state} />} />
      <Route path='/projects/new' component={props => <NewProject state={this.state} />} />
      <Route path='/home' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/projects/:id' component={props => <Projects state={this.state} />} />
      <Redirect from='/' to='/home' />
    </Switch>
  )

  publicRoutes = () => (
    <Switch>
      <Route path='/login' component={props => <Login state={this.state} log={this.userLoggedIn} />} />
      <Route path='/signup' component={props => <SignUp state={this.state} log={this.userLoggedIn} />} />
      <Route path='/home' component={Home} />
      <Redirect from='/' to='/home' />
    </Switch>
  )

  userLoggedIn = (bool) => {
    this.setState({
      loggedIn: bool
    })
  }

  signout = () =>{
    this.setState({
      loggedIn: false
    })
  }



  render() {
    return (
      <Router>
        <div className="App">
          <NavBar isLoggedIn={this.state.loggedIn} signout={this.signout}/>
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
