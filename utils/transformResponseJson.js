const transform = (recipe) => {
  const { title, ingredients, href, thumbnail } = recipe

  return {
    title,
    ingredients,
    link: href,
    gif: thumbnail
  }
}

module.exports = {
  transform
}
