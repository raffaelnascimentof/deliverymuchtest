const { alphabeticalOrder } = require('../utils/alphabeticalOrderUtil')

const transform = (recipe, giphyUrl) => {
  const { title, ingredients, href } = recipe

  return {
    title,
    ingredients: alphabeticalOrder(ingredients),
    link: href,
    gif: giphyUrl
  }
}

module.exports = {
  transform
}
