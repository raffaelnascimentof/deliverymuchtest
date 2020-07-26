const { isUndefined, hasMoreThaThreeIngredients } = require('../utils/keyWordsUtils')

const getRecipes = async (request, response) => {
  const keyWords = request.query.i

  if (isUndefined(keyWords)) return response.status(400).send('Nenhum ingrediente foi passado')
  if (hasMoreThaThreeIngredients(keyWords)) return response.status(400).send('Nenhum ingrediente foi passado')

  response.send('Ta funcionando')
}

module.exports = {
  getRecipes
}
