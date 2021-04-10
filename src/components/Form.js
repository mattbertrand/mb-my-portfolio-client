import React, { Component } from 'react'
import { addProject } from '../actions/index'
import { connect } from 'react-redux'

class Form extends Component {
    state = {
        title: '',
        category: '',
        image_link: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()

        this.props.addProject(this.state, this.props.history)
    }

    render() {
        return (
            <div className="form">
               <h3>Add a Project</h3>
               <form onSubmit={ this.handleSubmit }>
                   <div className="form-group">
                       <label htmlFor="title">Title</label>
                       <input className="form-control" type="text" id="title" name="title" value={this.state.title} onChange={ this.handleChange } required/>
                   </div>
                   <div>
                       <label htmlFor="category">Category</label>
                       <input className="form-control" type="text" id="category" name="category" value={this.state.category} onChange={ this.handleChange } required/>
                   </div>
                   <div>
                       <label htmlFor="image_link">Image</label>
                       <input className="form-control" type="text" id="image_link" name="image_link" value={this.state.image_link} onChange={ this.handleChange } required/>
                   </div>
                   <br />
                   <button className="button-color" type="submit">Add Project</button>
               </form>
               <img alt="form" src="data:image/png;base64,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"/>
            </div>
        )
    }
}

export default connect(null, { addProject } )(Form)
