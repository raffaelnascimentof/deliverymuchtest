const { alphabeticalOrder } = require('../utils/alphabeticalOrderUtil')

const transform = (recipe) => {
  const { title, ingredients, href, thumbnail } = recipe

  return {
    title,
    ingredients: alphabeticalOrder(ingredients),
    link: href,
    gif: thumbnail
  }
}

module.exports = {
  transform
}
