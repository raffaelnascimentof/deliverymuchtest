const { isUndefined, hasMoreThaThreeIngredients } = require('../utils/keyWordsUtils')
const recipePuppyService = require('../services/recipePuppyService')

const getRecipes = async (request, response) => {
  const keyWords = request.query.i

  if (isUndefined(keyWords)) return response.status(400).send('Nenhum ingrediente foi passado')
  if (hasMoreThaThreeIngredients(keyWords)) return response.status(400).send('Maximo de 3 ingredientes')

  await recipePuppyService(keyWords.split(',')).then(function (res) {
    response.status(200).send(res.data)
  })
}

module.exports = {
  getRecipes
}
