import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Switch>

        </Switch>
        <Footer />
      </Router>
    );
  }
  
}

export default App;
