const { isUndefined, hasMoreThaThreeIngredients } = require('../utils/keyWordsUtils')

it('Should be return true if parameter is undefined', () => {
  expect(isUndefined()).toBe(true)
})

it('Should be return true if have more than three ingredients', () => {
  const ingredients = 'onion, garlic, tomato, apple'
  expect(hasMoreThaThreeIngredients(ingredients))
    .toBe(true)
})
