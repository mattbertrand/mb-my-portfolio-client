import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import ErrorPage from './components/ErrorPage'

class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={ HomePage } />
          <Route component={ ErrorPage } />
        </Switch>
        <Footer />
      </Router>
    );
  }
  
}

export default App;
