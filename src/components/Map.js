import React, { Component } from 'react'
import CalorieCalc from './CalorieCalc'
export default class Map extends Component {
    constructor(){
        super();
        this.state ={
            mealCal: 0
        }
        this.calc = this.calc.bind(this)
    }
    calc(params){
        const totalCal = this.props.dishName.calories * params
        this.setState({mealCal: totalCal})
    }
    render() {
        const { name, type, calories, servingsize, imgURL, rating } = this.props.dishName
        const { mealCal } = this.state
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
                    <h3>{mealCal}-Total Calories</h3>
                    <CalorieCalc calc={this.calc}/>
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
