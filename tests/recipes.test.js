const supertest = require('supertest')
const app = require('../index')
const request = supertest(app)

it('Should be return status 400 if no parameter is passed', async done => {
  const response = await request.get('/recipes')

  expect(response.status).toBe(400)
  done()
})

it('Should be return status 400 if more than three parameter are passed', async done => {
  const response = await request.get('/recipes?i=onion,garlic,tomato,apple')

  expect(response.status).toBe(400)
  done()
})
