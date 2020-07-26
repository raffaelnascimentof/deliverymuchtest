const app = require('express')()
const recipesRouter = require('./routes/recipesRoute')

app.use('/', recipesRouter)

app.listen(3000, () => {
  console.log('Backend running')
})
