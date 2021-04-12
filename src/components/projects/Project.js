import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteProject } from '../../actions/projects/project'

class Project extends Component {
    render() {
        const { title, category, image_link, youtube_link, github_link, medium_link, id } = this.props

        return (
            <div className="card">
            <div className="card-body">
                <div className="projects" >
                    <h3>{ title }</h3>
                    <p>{ category }</p>
                    <img alt="Project"src={ image_link }/>
                    <br />
                    <a href={youtube_link}>Youtube</a> | 
                    <a href={github_link}>Github</a> | 
                    <a href={medium_link}>Blog</a>
                    <br />
                    <button className="button-color" onClick={() => this.props.deleteProject(id, this.props.history)}>Delete Project</button>
                    <br />
                    {/* <button className="button-color"><Link to="" />Blog</button> */}
                    
                </div>

            </div>
          </div>
            
        )
    }
}

export default connect(null, { deleteProject })(Project)
