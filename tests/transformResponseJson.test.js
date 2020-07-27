const { transform } = require('../utils/transformResponseJson')

it('should be return a response json in correct format', () => {
  const giphyUrl = 'image'

  const wrongFormat = {
    title: 'Recipe',
    ingredients: 'onion, apple',
    href: 'www.recipePuppy.com',
    thumbnail: 'thumbnail'
  }

  const correctFormat = {
    title: 'Recipe',
    ingredients: ['apple', 'onion'],
    link: 'www.recipePuppy.com',
    gif: 'image'
  }

  expect(transform(wrongFormat, giphyUrl)).toStrictEqual(correctFormat)
})
