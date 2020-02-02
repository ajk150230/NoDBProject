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
    componentDidMount(){
        this.rng()
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
        this.setState({ mealArr: arr2 })
    }
    goose() {
        return Math.floor(Math.random() * this.props.myRecipes.length)
    }
    render() {
        const mealPlan = this.state.mealArr.map((element, index) => {
            return (
                <div>
                    <h1>{element.day}</h1>
                    <section id='eachday'>
                        <div id='lunch'>
                            <h2>Lunch</h2>
                            <h4>{element.lunch.name}</h4>
                            <h4>{element.lunch.calories} Calories</h4>
                            <h6>{element.lunch.recipe}</h6>
                        </div>
                        <div id='dinner'>
                            <h2>Dinner</h2>
                            <h4>{element.dinner.name}</h4>
                            <h4>{element.dinner.calories} Calories</h4>
                            <h6>{element.dinner.recipe}</h6>
                        </div>
                    </section>
                </div>
            )
        })
        return (
            <body>
                <button onClick={this.rng}>Generate a Meal Plan</button>
                {mealPlan}
            </body>
        )
    }
}
