const express = require('express');

const recipeService = require('./recipe.service');

const router = express.Router();

router.get('/all', (req, res) => {
    recipeService.getAllRecipe()
        .then(recipe => {console.log(recipe); return res.json(recipe)})
        .catch(err => {console.log("inside catch"); return res.status(404).send("All recipes not found")});
});

module.exports = router;