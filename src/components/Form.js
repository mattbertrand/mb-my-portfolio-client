import React, { Component } from 'react'

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

    render() {
        return (
            <div>
               <h3>Add a Project</h3>
               <form>
                   <div>
                       <label htmlFor="title">Title</label>
                       <input type="text" id="title" name="title" value={this.state.title} onChange={ this.handleChange }/>
                   </div>
                   <div>
                       <label htmlFor="category">Category</label>
                       <input type="text" id="category" name="category" value={this.state.category} onChange={ this.handleChange }/>
                   </div>
                   <div>
                       <label htmlFor="image_link">Image</label>
                       <input type="text" id="image_link" name="image_link" value={this.state.image_link} onChange={ this.handleChange }/>
                   </div>
                   <input type="submit" value="Add Project" />
               </form>
            </div>
        )
    }
}

export default Form
