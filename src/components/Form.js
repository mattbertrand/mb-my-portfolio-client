import React, { Component } from 'react'

class Form extends Component {
    state = {
        title: '',
        category: '',
        image_link: ''
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
                       <label htmlFor="image">Image</label>
                       <input type="text" id="image" name="image" value={this.state.image} onChange={ this.handleChange }/>
                   </div>
                   <input type="submit" value="Add Project" />
               </form>
            </div>
        )
    }
}

export default Form
