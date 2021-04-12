import React, { Component } from 'react'

class Blog extends Component {
    render() {
        const { content } = this.props
        return (
            <div>
                <p>{ content }</p>
            </div>
        )
    }
}

export default Blog
