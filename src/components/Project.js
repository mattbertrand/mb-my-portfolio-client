import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteProject } from '../actions/index'

class Project extends Component {
    render() {
        const { title, category, image_link, id } = this.props

        return (
            <div>
                <h3>{ title }</h3>
                <p>{ category }</p>
                <img alt="Project"src={ image_link }/>
                <button onClick={() => this.props.deleteProject(id, this.props.history)}>Delete Project</button>
            </div>
        )
    }
}

export default connect(null, { deleteProject })(Project)
