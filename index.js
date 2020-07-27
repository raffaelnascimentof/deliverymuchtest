const app = require('express')()
const recipesRouter = require('./routes/recipesRoute')

app.use('/', recipesRouter)

app.use((request, response) => {
  response.status(404).send({ error: 'URL não encontrada' })
})

app.listen(3000, () => {
  console.log('Backend running')
})
