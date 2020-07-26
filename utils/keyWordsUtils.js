const isUndefined = (keyWords) => {
  if (keyWords === undefined) return true
}

const hasMoreThaThreeIngredients = (keyWords) => {
  const numberOfIngredients = Array.from(keyWords.split(',')).length
  if (numberOfIngredients > 3) return true
}

module.exports = {
  isUndefined,
  hasMoreThaThreeIngredients
}
