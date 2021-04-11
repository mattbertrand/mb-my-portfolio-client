import React, { Component } from 'react'

class Blog extends Component {
    render() {
        return (
            <div>
                <p>{ this.props.content }</p>
            </div>
        )
    }
}

export default Blog
