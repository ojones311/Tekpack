import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import SignIn from './components/SignIn';

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="App">
        This is the main app.
        <SignIn/>
      </div>
    );
  }


}

export default App;
