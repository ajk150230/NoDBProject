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
            <div>
                <p>Enter A New Recipe </p>
                <input
                    name='name'
                    placeholder="enter Recipe Name"
                    onChange={this.handleChange} />
                <input
                    name='type'
                    placeholder="enter type of Recipe"
                    onChange={this.handleChange}  />
                <input    
                    name ='calories'
                    placeholder= "enter calories"
                    onChange={this.handleChange} />
                <input    
                    name ='servingsize'
                    placeholder= "enter server size"
                    onChange={this.handleChange} />
                <input    
                    name ='recipe'
                    placeholder= "enter ingredients"
                    onChange={this.handleChange} />
                <input    
                    name ='imgURL'
                    placeholder= "enter img url"
                    onChange={this.handleChange} />
                <button onClick={this.pushRecipe}>add</button>
            </div>
        )
    }
}