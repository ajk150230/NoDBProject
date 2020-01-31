let id = 3
const myRecipes =[
    {
        id: 1,
        name: 'Fried Chicken',
        type: 'chicken/drumsticks',
        calories: 82,
        servingsize: '1 piece',
        recipe: 'chicken flour 6 eggs buttermilk seasoning frying oil',
        imgURL: '',
        rating: 0,
    },
    {
        id: 2,
        name: 'Rice Rissoto',
        type: 'rice/italian',
        calories: 450,
        servingsize: '1 cup',
        recipe: '1tbps butter, 1tbps olive oil, 1 cup, 1/4ts salt, cheese, heavy milk',
        imgURL: '',
        rating: 0,
    },
    {
        id: 3,
        name: 'sirloin steak',
        type: 'steak/protein',
        calories: 500,
        servingsize: '1/4 ounce',
        recipe: '1tbps butter, 1tbps olive oil, 1 cup, black pepper, garlic',
        imgURL: '',
        rating: 0,
    },
    {
        id: 4,
        name: 'Tacos',
        type: 'texmex',
        calories: 300,
        servingsize: '1 taco',
        recipe: 'taco meat, cheese, torilla, onions, queso',
        imgURL: '',
        rating: 0,
    },
    {
        id: 5,
        name: 'Grilled Chicken Sandwich',
        type: 'Chicken',
        calories: 510,
        servingsize: '1 sandwich',
        recipe: 'chicken thighs, cheese, grilled onions and bellpeppers, hamburgerbuns, sauce',
        imgURL: '',
        rating: 0,
    },
    {
        id: 6,
        name: 'Oven Pizza',
        type: 'instant/italian',
        calories: 400,
        servingsize: '2 slice',
        recipe: 'preheat the oven to 400F, place the pizza in for 14 minutes',
        imgURL: '',
        rating: 0,
    },
    {
        id: 7,
        name: 'Fried rice',
        type: 'asian/rice',
        calories: 300,
        servingsize: '1 cup',
        recipe: '1tbps olive oil, veggies of your choice, 1 cup of white rice, soy sauce',
        imgURL: '',
        rating: 0,
    },
    {
        id: 8,
        name: 'Spaghetti',
        type: 'noodles/italian',
        calories: 800,
        servingsize: '1 serving',
        recipe: 'spaghetti of choice, maranara sauce, parmsean cheese, grilled meatballs',
        imgURL: '',
        rating: 0,
    },
    
]
 module.exports = {
     viewRecipes: (req, res) => {
         res.status(200).json(myRecipes)
     },
     newRecipes: (req, res) => {
         const queue ={
             id,
             ...req.body
         }
         myRecipes.push(queue)
         id++;
         res.status(200).json(myRecipes)
     },
     recipeRate: (req, res) => {
        const targetID = myRecipes.findIndex(recipe => recipe.id === +req.params.id)
        myRecipes[targetID].rating = req.body.rating
        console.log(myRecipes[targetID].rating)
        res.status(200).json(myRecipes)
     },
     recipeDelete: (req, res) => {
         const targetID = myRecipes.findIndex(recipe => recipe.id ===+ req.params.id)
             myRecipes.splice(targetID, 1)
             res.status(200).json(myRecipes) 
     }
}
