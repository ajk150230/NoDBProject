const express = require('express');
const app = express()
const MC = require ('./controllers/recipeController');
const UC = require ('./controllers/userController')

app.use(express.json());

app.get('/api/recipes', MC.viewRecipes);
app.post('/api/recipes', MC.newRecipes);
app.put('/api/recipes/:id', MC.recipeRate);
app.delete('/api/recipes/:id', MC.recipeDelete)

app.get('/api/user', UC.showInfo);
app.put('/api/user/:id', UC.changeInfo);

const PORT = 5070

app.listen(PORT)