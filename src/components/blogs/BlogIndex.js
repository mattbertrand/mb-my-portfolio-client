import React, { Component } from 'react'
import { connect } from 'react-redux'
import Blog from './Blog'

class BlogIndex extends Component {
    render() {
        return (
            <div>
                List Page
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        blogs: state.blogs
    }
}

export default connect(mapStateToProps)(BlogIndex)
