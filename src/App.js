import React from 'react';
import axios from 'axios'
import AddRecipe from './components/AddRecipe'
import Map from './components/Map'
import CalorieCalc from './components/CalorieCalc'
import RandomMeals from './components/RandomMeals'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      myRecipes: [],
      updateRate: 0,
      display: 'home',
      randomRecipes:[],
    }
    this.postRecipe = this.postRecipe.bind(this)
    this.deleteRecipe = this.deleteRecipe.bind(this)
    this.rateRecipe = this.rateRecipe.bind(this)
    this.updateRating = this.updateRating.bind(this)
    this.showWeekly = this.showWeekly.bind(this)
  }
  componentDidMount() {
    axios
      .get('/api/recipes')
      .then(res => this.setState({ myRecipes: res.data }))
      .catch(err => console.log(err))
  }
  postRecipe(results) {
    this.setState({ myRecipes: results })
  }
  deleteRecipe() {
    axios
      .delete(`/api/recipes/${this.state.myRecipes.id}`)
      .then(res => this.postRecipe(res.data))
      .catch(err => console.log(err))
  }
  rateRecipe(id) {
    axios
      .put(`/api/recipes/${id}`, { rating: this.state.updateRate })
      .then(res => this.postRecipe(res.data))
      .catch(err => console.log(err))
  }
  showWeekly(param){
    this.setState({randomRecipes: param})
  }
  updateRating(e) {
    this.setState({ updateRate: e.target.value })
  }
  displayHome=()=>{
    this.setState({display: 'home'})
  }
  displayInput=()=>{
    this.setState({display: 'input'})
  }
  displayMeals=()=>{
    this.setState({display: 'meals'})
  }
  displayWeekly=()=>{
    this.setState({display: 'weekly'})
  }
  render() {
    const mealsMapped = this.state.myRecipes.map((element, index) => {
      return (
        <section>
          <Map
            dishName={element}
            deleteRecipe={this.deleteRecipe}
            rateRecipe={this.rateRecipe}
            updateRating={this.updateRating}
          />
        </section>
      )
    })
    return (
    
      <main id='main'>
        <header id='tophead'>
            <button id='topbutton' onClick={this.displayHome}>Home</button>
            <button id='topbutton' onClick={this.displayInput}>Input</button>
            <button id='topbutton' onClick={this.displayMeals}>Meals</button>
            <button id='topbutton' onClick={this.displayWeekly}>WeeklyPlan</button>
        </header>

        {
          this.state.display === 'home'
            ?
            <h1 id='title'> The Last Meal </h1>
            :
            this.state.display === 'input'
              ?
              <AddRecipe postRecipe={this.postRecipe} />
              :
              this.state.display === 'meals'
                ?
                <div id='currentrecipes'>
                  <h1 id='title'>Current Recipes</h1>
                  {mealsMapped}
                </div>
                :
                this.state.display === 'weekly'
                  ?
                  <RandomMeals myRecipes={this.state.myRecipes} 
                  showWeekly={this.showWeekly} 
                  randomRecipes={this.state.randomRecipes}/>
                  :
                  null
    }
      </main>
    )
  }
}


export default App;
