import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

class NavBar extends Component {
    render() {
        return (
            // <div>
            //     <ul>
            //         <li><Link to="/">Home</Link></li>
            //         <li><Link to="/about">About Me</Link></li>
            //         <li><Link to="/projects">Projects</Link></li>
            //         <li><Link to="/projects/new">Add a Project</Link></li>
            //     </ul>
            // </div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container">

            
            <a className="navbar-brand" href="#">MB My Portfolio</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/about">About Me</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/projects">Projects</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/projects/new">Add Project</a>
                </li>
                </ul>
            </div>
            </div>
        </nav>
        )
    }
}

export default NavBar
