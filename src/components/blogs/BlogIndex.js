// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import Blog from './Blog'

// class BlogIndex extends Component {
//     render() {
//         console.log(this.props.blogs)
//         const blogs = this.props.blogs.map ( (blog, i) => <Blog key={i} content={blog.content} history={this.props.history} blog={blog}/>)
//         return (
//             <div>
//                 { blogs }
//             </div>
//         )
//     }
// }

// const mapStateToProps = state => {
//     return {
//         blogs: state.blogs.blogs
//     }
// }

// export default connect(mapStateToProps)(BlogIndex)
