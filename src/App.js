import React from 'react';
import axios from 'axios'
import AddRecipe from './components/AddRecipe'
import Map from './components/Map'
import RandomMeals from './components/RandomMeals'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      myRecipes: [],
      updateRate: 0,
      display: 'home'
    }
    this.postRecipe = this.postRecipe.bind(this)
    this.deleteRecipe = this.deleteRecipe.bind(this)
    this.rateRecipe = this.rateRecipe.bind(this)
    this.updateRating = this.updateRating.bind(this)
    // this.renderSwitch = this.renderSwitch.bind(this)
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
  
  // renderSwitch(param) {
  //   switch (param) {

  //     case 'inputs':
  //       return <AddRecipe postRecipe={this.postRecipe} />;
  //     // case 'display':
  //     //   return <div> <h1>Current Recipes</h1> {mealsMapped} </div>
  //     default:
  //     return (
  //       <div>
  //         <h1>Last Diet</h1>;
  //       </div>
  //     )
  //   }
  // }
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
      <div>
        <header>
            <button onClick={this.displayHome}>Home</button>
            <button onClick={this.displayInput}>Input</button>
            <button onClick={this.displayMeals}>Meals</button>
            <button onClick={this.displayWeekly}>Generate Meal Plan</button>
          </header>
        {/* <section>
        <AddRecipe postRecipe={this.postRecipe} />
        <h1>Current Recipes</h1>
        {mealsMapped}
      </section> */}
        {/* // <div>
      //   <button onClick={this.renderSwitch()}>Home</button>
      //   <button onClick={this.renderSwitch('input')}>Input</button>
      // </div> */}
        {
          this.state.display === 'home'
            ?
            <h1> The Last Meal </h1>
            :
            this.state.display === 'input'
              ?
              <AddRecipe postRecipe={this.postRecipe} />
              :
              this.state.display === 'meals'
                ?
                <div>
                  <h1>Current Recipes</h1>
                  {mealsMapped}
                </div>
                :
                this.state.display === 'weekly'
                  ?
                  <RandomMeals myRecipes={this.state.myRecipes}/>
                  :
                  null
    }
      </div>
    )
  }
}


export default App;
