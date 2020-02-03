import React, { Component } from 'react'

export default class RandomMeals extends Component {
    constructor() {
        super()
        this.rng = this.rng.bind(this)
        this.goose = this.goose.bind(this)
    }
    rng() {
        let arr2 = []
        let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
        for (let i = 0; i < 7; i++) {
            const obj = {
                day: '',
                lunch: '',
                dinner: ''
            }
            const rand = this.goose()
            const rand2 = this.goose()
            obj.day = days[i]
            obj.lunch = this.props.myRecipes[rand]
            obj.dinner = this.props.myRecipes[rand2]
            arr2.push(obj)
        }
        this.props.showWeekly(arr2)
    }
    goose() {
        return Math.floor(Math.random() * this.props.myRecipes.length)
    }
    render() {
        const mealPlan = this.props.randomRecipes.map((element, index) => {
            return (
                <div id='weeklyplan'>
                    <h1 id='day'>{element.day}</h1>
                    <section id='eachday'>
                        <div id='lunch'>
                            <h2 id='daylunch'>Lunch</h2>
                            <h4>{element.lunch.name}</h4>
                            <h6>{element.lunch.calories} Calories per serving</h6>
                            <h6>{element.lunch.recipe}</h6>
                        </div>
                        <div id='dinner'>
                            <h2 id='daydinner'>Dinner</h2>
                            <h4>{element.dinner.name}</h4>
                            <h6>{element.dinner.calories} Calories per serving</h6>
                            <h6>{element.dinner.recipe}</h6>
                        </div>
                    </section>
                </div>
            )
        })
        return (
            <body id='weekbody'>
                <div id='save'>
                    <button id='randombutton' onClick={this.rng}>Generate a Meal Plan</button>
                </div>
                {mealPlan}
            </body>
        )
    }
}
