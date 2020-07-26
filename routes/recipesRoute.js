const router = require('express').Router()
const recipesController = require('../controllers/recipesController')

router.get('/recipes', recipesController.getRecipes)

module.exports = router
