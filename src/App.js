import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { getProjects } from './actions/index'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import Index from './components/projects/Index'
import ErrorPage from './components/ErrorPage'
import AboutMe from './components/AboutMe'
import Form from './components/projects/Form'
import Resume from './components/Resume'
import "bootstrap/dist/css/bootstrap.min.css"
import 'mdbreact/dist/css/mdb.css';

class App extends Component {

  componentDidMount() {
    this.props.getProjects()
  }

  render() {
    if (this.props.loading) {
      return (
        <h3>Loading...</h3>
      )
    }
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={ HomePage } />
          <Route exact path="/about" component={ AboutMe } />
          <Route exact path="/projects" component={ Index } />
          <Route exact path="/projects/new" component={ Form } />
          <Route exact path="/resume" component={ Resume } />
          {/* <Route exact path="/projects/${id}/edit" component={ Edit } /> */}
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
