import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import Index from './components/Index'
import ErrorPage from './components/ErrorPage'
import AboutMe from './components/AboutMe'

class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={ HomePage } />
          <Route exact path="/about" component={ AboutMe } />
          <Route exact path="/projects" component={ Index } />
          <Route component={ ErrorPage } />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loading
  }
}

export default connect(mapStateToProps, { getProjects })(App);
