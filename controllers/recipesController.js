const { isUndefined, hasMoreThaThreeIngredients } = require('../utils/keyWordsUtils')
const recipePuppyService = require('../services/recipePuppyService')
const { transform } = require('../utils/transformResponseJson')
const { getGiphy } = require('../services/giphyService')

const getRecipes = async (request, response) => {
  const keyWords = request.query.i

  if (isUndefined(keyWords)) {
    return response.status(400).send(
      { error: 'Nenhum ingrediente foi passado' })
  }

  if (hasMoreThaThreeIngredients(keyWords)) {
    return response.status(400).send(
      { error: 'Maximo de 3 ingredientes' })
  }

  const recipes = await recipePuppyService(keyWords.split(','))

  const { results } = recipes.data

  async function buildResponse () {
    const formatedRecipe = []

    for (const recipe of results) {
      const giphy = await getGiphy(recipe.title)
      const newRecipe = transform(recipe, giphy.data.data[0].url)
      formatedRecipe.push(newRecipe)
    }

    return response.status(200).send({
      key: keyWords,
      recipes: formatedRecipe
    })
  }

  buildResponse()
}

module.exports = {
  getRecipes
}
