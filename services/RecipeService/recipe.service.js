const recipeDao = require('./recipe.dao');

const recipeService = {
    getAllRecipe() {
        return Promise.resolve(recipeDao.getAll());
    }
};

module.exports = recipeService;