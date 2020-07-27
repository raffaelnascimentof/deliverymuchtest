const { transform } = require('../utils/transformResponseJson')

it('should be return a response json in correct format', () => {
  const wrongFormat = {
    title: 'Recipe',
    ingredients: 'onion, apple',
    href: 'www.recipePuppy.com',
    thumbnail: 'image'
  }

  const correctFormat = {
    title: 'Recipe',
    ingredients: ['apple', 'onion'],
    link: 'www.recipePuppy.com',
    gif: 'image'
  }

  expect(transform(wrongFormat)).toStrictEqual(correctFormat)
})
