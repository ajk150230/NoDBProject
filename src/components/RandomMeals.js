import React, { Component } from 'react'

export default class RandomMeals extends Component {
    constructor() {
        super()
        this.state = {
            random: 0,
            mealArr: []
        }
        this.rng = this.rng.bind(this)
        this.goose = this.goose.bind(this)
    }
    rng() {
        let arr2 = []
        for (let i = 0; i <= 7; i++) {
            const obj = {
                lunch: '',
                dinner: ''
            }
            const rand = this.goose()
            const rand2 = this.goose()
            obj.lunch = this.props.myRecipes[rand]
            obj.dinner = this.props.myRecipes[rand2]
            this.state.mealArr.push(obj)
        }
        console.log(this.state.mealArr)
    }
    goose() {
        return Math.floor(Math.random() * this.props.myRecipes.length)
    }
    render() {
        this.rng()
        const mealPlan = this.state.mealArr.map((element, index) => {
            return (
                <div>
                    <h1>Lunch</h1>
                    <h4>☆{element.lunch.name}</h4>
                    <h6>{element.lunch.calories}</h6>
                    <h4>{element.lunch.recipe}</h4>
                    <h1>Dinner</h1>
                    <h4>☆{element.dinner.name}</h4>
                    <h6>{element.dinner.calories}</h6>
                    <h4>{element.dinner.recipe}</h4>
                </div>
            )
        })
        return (
            <div>
                {mealPlan}
            </div>
        )
    }
}
