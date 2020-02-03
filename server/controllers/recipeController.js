let id = 14
const myRecipes =[
    {
        id: 1,
        name: 'Fried Chicken',
        type: 'chicken/drumsticks',
        calories: 82,
        servingsize: '1 piece',
        recipe: 'chicken flour 6 eggs buttermilk seasoning frying oil',
        imgURL: 'https://media.giphy.com/media/1dGYJVktc6WhWUD2sj/giphy.gif',
        rating: 4.5,
    },
    {
        id: 2,
        name: 'Rice Rissoto',
        type: 'rice/italian',
        calories: 450,
        servingsize: '1 cup',
        recipe: '1tbps butter, 1tbps olive oil, 1 cup, 1/4ts salt, cheese, heavy milk',
        imgURL: 'https://media.giphy.com/media/eNvU6yf8mUNM03x1Jy/giphy.gif',
        rating: 4,
    },
    {
        id: 3,
        name: 'Sirloin Steak',
        type: 'steak/protein',
        calories: 500,
        servingsize: '1/4 ounce',
        recipe: '1tbps butter, 1tbps olive oil, 1 cup, black pepper, garlic',
        imgURL: 'https://media.giphy.com/media/ekkUw0f1yEdPU5tS2i/giphy.gif',
        rating: 3,
    },
    {
        id: 4,
        name: 'Tacos',
        type: 'texmex',
        calories: 300,
        servingsize: '1 taco',
        recipe: 'taco meat, cheese, torilla, onions, queso',
        imgURL: 'https://www.visitroseville.com/wp-content/uploads/2014/09/Taco.gif',
        rating: 2.5,
    },
    {
        id: 5,
        name: 'Grilled Chicken Sandwich',
        type: 'Chicken',
        calories: 510,
        servingsize: '1 sandwich',
        recipe: 'chicken thighs, cheese, grilled onions and bellpeppers, hamburgerbuns, sauce',
        imgURL: '',
        rating: 3,
    },
    {
        id: 6,
        name: 'Oven Pizza',
        type: 'instant/italian',
        calories: 400,
        servingsize: '2 slice',
        recipe: 'preheat the oven to 400F, place the pizza in for 14 minutes',
        imgURL: '',
        rating: 2.5,
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
        rating: 0
    },
    {
        id: 9,
        name: 'Potatoe Soup',
        type: 'murica',
        calories: 200,
        servingsize: '1 cup',
        recipe: 'potatoes, broth of choice, cheese, heavy milk',
        imgURL: '',
        rating: 0,
    },
    {
        id: 10,
        name: 'Chipotle',
        type: 'texmex',
        calories: 1000,
        servingsize: '1 bowl/burrito',
        recipe: 'taco meat, cheese, torilla, onions, rice',
        imgURL: '',
        rating: 0,
    },
    {
        id: 11,
        name: 'Philly cheese steak',
        type: 'murica',
        calories: 600,
        servingsize: '1 sandwich',
        recipe: 'thin steak, cheese, wheat bread, onions',
        imgURL: '',
        rating: 0,
    },
    {
        id: 12,
        name: 'Chick fil A',
        type: 'chicken, sandwich',
        calories: 840,
        servingsize: '1 sandwich',
        recipe: '$4.15',
        imgURL: '',
        rating: 0,
    },
    {
        id: 13,
        name: 'Subway',
        type: 'Murica',
        calories: 370,
        servingsize: '6" sub',
        recipe: '$7.58',
        imgURL: '',
        rating: 0,
    },
    
]

 module.exports = {
    viewRecipes: (req, res) => {
        const {lowcalories} = req.query;
        let qarr3 =[]
        if (lowcalories === 'true'){
           qarr3 = myRecipes.filter(element =>{return element.calories < 500 ? true : false })
           return res.status(200).json(qarr3)
        }
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
        const id = myRecipes.findIndex(recipe => recipe.id === +req.params.id)
        myRecipes[id].rating = req.body.rating
        console.log(myRecipes[id].rating)
        res.status(200).json(myRecipes)
     },
     recipeDelete: (req, res) => {
         const id = myRecipes.findIndex(recipe => recipe.id === +req.params.id)
         console.log(id, req.params.id);
             myRecipes.splice(id, 1)
             res.status(200).json(myRecipes) 
     }
}
