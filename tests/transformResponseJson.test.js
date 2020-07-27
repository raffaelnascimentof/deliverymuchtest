const { transform } = require('../utils/transformResponseJson')

it('should be return a response json in correct format', () => {
  const wrongFormat = {
    title: 'Recipe',
    ingredients: 'Onion',
    href: 'www.recipePuppy.com',
    thumbnail: 'image'
  }

  const correctFormat = {
    title: 'Recipe',
    ingredients: 'Onion',
    link: 'www.recipePuppy.com',
    gif: 'image'
  }

  expect(transform(wrongFormat)).toStrictEqual(correctFormat)
})
