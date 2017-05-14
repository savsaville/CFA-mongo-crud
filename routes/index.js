var express = require('express');
var router = express.Router();

const Ingredient = require('../models/Ingredient');
const ingredientController = require('../controllers/ingredientController')
/* GET home page. */
router.get('/', ingredientController.getIngredients);

router.post('/', ingredientController.createIngredients);

router.get('/ingredients/:id/edit', ingredientController.editIngredients);

router.post('/ingredients/:id/edit', ingredientController.updateIngredients);

// router.delete('/ingredients/:id/delete', ingredientController.deleteIngredients);

//api

router.get('/api', ingredientController.getApiIngredients);

router.post('/api', ingredientController.createApiIngredients);

router.get('/api/:id', ingredientController.getIngredientApi);

router.post('/api/:id/edit', ingredientController.updateApiIngredients);



module.exports = router;
