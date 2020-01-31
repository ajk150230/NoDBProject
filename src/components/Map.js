import React, { Component } from 'react'

export default class Map extends Component {
    render() {
        const {name, type, calories, servingsize, imgURL, rating } = this.props.dishName
        console.log(this.props.dishName.id)
        return (
            <div>
                <h1>{name}-{rating}★</h1>
                <h6>{type}</h6>
                <h6>{calories} Calories</h6>
                <h6>{servingsize}</h6>
                <input onChange={this.props.updateRating}/>
                <button onClick={() => this.props.rateRecipe(this.props.dishName.id)}>Rate</button>
                <button onClick={this.props.deleteRecipe}>Delete</button>
                <img src={imgURL} alt='imagenotready'></img>
            </div>
        )
    }
}
