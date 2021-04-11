import React, { Component } from 'react'
import { connect } from 'react-redux'
import Project from './Project'

class Index extends Component {
    render() {
        const projects = this.props.projects.map( (project, i) => <Project key={i} title={project.title} category={project.category} image_link={project.image_link} id={project.id} history={this.props.history}/>)
        return (
            <div>
                { projects }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        projects: state.projects.projects,
        blogs: state.blogs.blogs
    }
}

export default connect(mapStateToProps)(Index)
