const axios = require('axios')

async function getGiphy (nameOfRecipe) {
  return axios.get(`http://api.giphy.com/v1/gifs/search?q=${nameOfRecipe}&api_key=zupVZrSHHlZsh0i1W9G8ZFluaTElB3B8&limit=1`)
}

module.exports = {
  getGiphy
}
