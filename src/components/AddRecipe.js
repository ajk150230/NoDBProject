import React from 'react'
import axios from 'axios'

export default class AddRecipe extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            type: '',
            recipe: '',
            imgURL: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.pushRecipe = this.pushRecipe.bind(this)
    }
    handleChange(inp) {
        this.setState({ [inp.target.name]: inp.target.value })
    }
    pushRecipe(){
        axios
            .post('/api/recipes', this.state)
            .then( res => this.props.postRecipe(res.data))
            .catch(err => console.log(err))
    }
    component
    render() {
        return (
            <section id='inputfield'>
                <h1 id='title'>Enter A New Recipe </h1>
                <input
                    name='name'
                    placeholder="Enter Recipe Name"
                    onChange={this.handleChange} />
                <input
                    name='type'
                    placeholder="Enter Type of Recipe"
                    onChange={this.handleChange}  />
                <input    
                    name ='calories'
                    placeholder= "Enter Calories"
                    onChange={this.handleChange} />
                <input    
                    name ='servingsize'
                    placeholder= "Enter server size"
                    onChange={this.handleChange} />
                <input    
                    name ='imgURL'
                    placeholder= "Enter Img url"
                    onChange={this.handleChange} />
                <input id='enteringredients'   
                    name ='recipe'
                    placeholder= "Enter Ingredients"
                    onChange={this.handleChange} />
                <button id='addrecipe'onClick={this.pushRecipe}>Submit</button>
            </section>
        )
    }
}