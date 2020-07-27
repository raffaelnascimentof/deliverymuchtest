const { isUndefined, hasMoreThaThreeIngredients } = require('../utils/keyWordsUtils')
const recipePuppyService = require('../services/recipePuppyService')
const { transform } = require('../utils/transformResponseJson')
const _ = require('lodash')

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

  await recipePuppyService(keyWords.split(',')).then(function (res) {
    const { results } = res.data

    response.status(200).send({
      key: keyWords,
      recipse: _.map(results, transform)
    })
  })
}

module.exports = {
  getRecipes
}
