const axios = require('axios')

async function getGiphy (nameOfRecipe) {
  const API_KEY = ''

  return axios.get(`http://api.giphy.com/v1/gifs/search?q=${nameOfRecipe}&api_key=${API_KEY}&limit=1`)
}

module.exports = {
  getGiphy
}
