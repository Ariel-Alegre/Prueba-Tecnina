const createError = require('http-errors')
const express = require('express')
const cors = require('cors')
const indexRouter = require('./routers/index')
const port = process.env.PORT || 4000
const app = express();


app.use(cors())
app.use(express.json())
app.use('/', indexRouter)
app.use((req, res, next) => {
  next(createError(404))
})


app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`)
})

module.exports = app