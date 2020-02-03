import React from 'react';
import axios from 'axios'
import AddRecipe from './components/AddRecipe'
import Map from './components/Map'
import CalorieCalc from './components/CalorieCalc'
import RandomMeals from './components/RandomMeals'
import UserProfile from './components/UserProfile'
import EditProfile from './components/EditProfile'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      myRecipes: [],
      updateRate: 0,
      display: 'home',
      randomRecipes: [],
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
  deleteRecipe(id) {
    axios
      .delete(`/api/recipes/${id}`)
      .then(res => this.postRecipe(res.data))
      .catch(err => console.log(err))
  }
  rateRecipe(id) {
    axios
      .put(`/api/recipes/${id}`, { rating: this.state.updateRate })
      .then(res => this.postRecipe(res.data))
      .catch(err => console.log(err))
  }
  showWeekly(param) {
    this.setState({ randomRecipes: param })
  }
  updateRating(e) {
    this.setState({ updateRate: e.target.value })
  }
  displayHome = () => {
    this.setState({ display: 'home' })
  }
  displayInput = () => {
    this.setState({ display: 'input' })
  }
  displayMeals = () => {
    this.setState({ display: 'meals' })
  }
  displayWeekly = () => {
    this.setState({ display: 'weekly' })
  }
  displayProfile = () => {
    this.setState({ display: 'user' })
  }
  render() {
    const mealsMapped = this.state.myRecipes.map((element, index) => {
      console.log(element);
      return (
        <section>
          <Map
            dishName={element}
            deleteRecipe={() => this.deleteRecipe(element.id)}
            rateRecipe={this.rateRecipe}
            updateRating={this.updateRating}
          />
        </section>
      )
    })
    return (
      <main id='main'>
        <footer id='profiles'>
          <button id='botbutton' onClick={this.displayProfile}>PROFILE</button>
        </footer>
        <header id='tophead'>
          <button id='topbutton' onClick={this.displayHome}>Home</button>
          <button id='topbutton' onClick={this.displayInput}>Add</button>
          <button id='topbutton' onClick={this.displayMeals}>Recipes</button>
          <button id='topbutton' onClick={this.displayWeekly}>Week Plan</button>
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
                    randomRecipes={this.state.randomRecipes} />
                  :
                  this.state.display === 'user'
                    ?
                    <>
                    <UserProfile />
                    </>
                    :
                    null
    }

      </main>
    )
  }
}


export default App;
