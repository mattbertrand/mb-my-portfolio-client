import React, { Component } from 'react'

class Project extends Component {
    render() {
        const { title, category, image_link } = this.props

        return (
            <div>
                <h3>{ title }</h3>
                <p>{ category }</p>
                <img alt="Project"src={ image_link }/>
            </div>
        )
    }
}

export default Project
