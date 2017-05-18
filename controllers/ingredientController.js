const mongoose = require('mongoose');
const Ingredient = require('../models/Ingredient');

exports.getIngredients = (req, res) => {
Ingredient.find()
  .then((ingredients) => {
    res.render('index', {
      title: 'Ingredients',
      ingredients: ingredients
    })
  })
};

exports.getApiIngredients = (req, res) => {
Ingredient.find()
  .then((ingredients) => {
    res.json(ingredients)
  })
};

exports.createIngredients = (req, res) => {
const name = req.body.ingredient_name;
let ingredient = new Ingredient();
ingredient.name = name;
ingredient.save()
  .then(() => {
    res.redirect('/')
  })
};

exports.createApiIngredients = (req, res) => {
const name = req.query.name;
let ingredient = new Ingredient();
ingredient.name = name;
ingredient.save()
  .then(() => {
    res.json(ingredient)
  })
};

exports.editIngredients = (req, res) => {
  Ingredient.findOne({ _id: req.params.id })
    .then(ingredient => {
      res.render('editIngredient', {ingredient: ingredient});
    })
};

exports.getIngredientApi = (req, res) => {
  Ingredient.findOne({ _id: req.params.id })
    .then(ingredient => {
      res.json(ingredient);
    })
};

exports.updateIngredients = (req, res) => {
  Ingredient.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true //returns new ingredient
  })
      .then(ingredient => {
        res.redirect('/')
      })
}

exports.updateApiIngredients = (req, res) => {
  Ingredient.findOneAndUpdate({ _id: req.params.id }, req.query, {
    new: true //returns new ingredient
  })
      .then(ingredient => {
        res.redirect(`/api/${req.params.id}`)
      })
}

exports.deleteIngredients = (req, res) => {
	Ingredient.findByIdAndRemove({_id: req.params.id},
	   function(err){
		if(err) res.json(err);
		else    res.redirect('/ingredients');
	});
});

exports.deleteIngredientApi = function(req, res){
	Ingredient.findByIdAndRemove({_id: req.params.id},
	   function(err){
		if(err) res.json(err);
		else {
      Ingredient.find()
        .then(ingredients => {
          res.json(ingredients)
        })
    };
	});
};
