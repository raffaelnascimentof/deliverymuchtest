const supertest = require('supertest')
const app = require('../index')
const request = supertest(app)

it('Should be return status OK', async done => {
  const response = await request.get('/recipes')

  expect(response.status).toBe(200)
  done()
})
