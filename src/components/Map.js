import React, { Component } from 'react'

export default class Map extends Component {
    render() {
        const { name, type, calories, servingsize, imgURL, rating } = this.props.dishName
        console.log(this.props.dishName.id)
        return (
            <div id='mealCard'>
                <header id='mealName'>
                    <h1>{name}</h1>
                    <h1 id='stars'>{rating}★</h1>
                </header>
                <div id='micro'>
                    <h6>{type} </h6>
                    <h6>{calories} Calories</h6>
                    <h6> Serving size: {servingsize}</h6>
                </div>
                <div id='imagecard'>
                    <img id='foodimg' src={imgURL} alt='imagenotready'></img>
                </div>
                <div id='rating'>
                    <input id='rateinput'
                        placeholder='1-5 stars'
                        type='number'
                        onChange={this.props.updateRating} />
                    <button id='rate' onClick={() => this.props.rateRecipe(this.props.dishName.id)}>Rate</button>
                    <button id='delete' onClick={this.props.deleteRecipe}>Delete</button>
                </div>
            </div>
        )
    }
}
