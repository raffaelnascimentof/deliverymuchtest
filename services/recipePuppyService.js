const axios = require('axios')

async function getRecipesOfPuppyApi (keyWords) {
  return axios.get(`http://www.recipepuppy.com/api/?i=${keyWords[0]},${keyWords[1]},${keyWords[2]}`)
}

module.exports = getRecipesOfPuppyApi
