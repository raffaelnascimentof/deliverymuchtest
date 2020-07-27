const { alphabeticalOrder } = require('../utils/alphabeticalOrderUtil')

test('Should be oranize in alphabetical order', () => {
  const desorganize = 'e, b, d, a, c'
  const organize = ['a', 'b', 'c', 'd', 'e']
  expect(alphabeticalOrder(desorganize)).toStrictEqual(organize)
})
