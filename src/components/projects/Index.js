import React, { Component } from 'react'
import { connect } from 'react-redux'
import Project from './Project'

class Index extends Component {
    render() {
        console.log(this.props)
        const projects = this.props.projects.map( (project, i) => <Project key={i} title={project.title} category={project.category} image_link={project.image_link} youtube_link={project.youtube_link} github_link={project.github_link} medium_link={project.medium_link} id={project.id} history={this.props.history} project={project}/>)
        return (
            <div>
                { projects }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        projects: state.projects
    }
}

export default connect(mapStateToProps)(Index)
