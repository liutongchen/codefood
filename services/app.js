const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

//middleware
app.use(bodyParser.urlencoded({ extended: true }));

//RESTful interface
const recipes = require('./RecipeService/recipe.api');

app.use('/recipes', recipes);

app.listen(port, () => {
    console.log(`Liutong's chef profile is running on port ${port}.`);
});