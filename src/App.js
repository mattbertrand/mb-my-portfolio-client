import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'

class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
      <div className="App">
        <h1>Hello World</h1>
      </div>
      </Router>
    );
  }
  
}

export default App;
