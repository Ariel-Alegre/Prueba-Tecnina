const express = require('express')
const cors = require('cors')
const indexRouter = require('./routers/index')
const port = process.env.PORT || 4000
const app = express();
const db = require('./database/models')


app.use(cors())
app.use(express.json())
app.use('/', indexRouter)


db.sequelize.sync({force: true}).then(() => {
  app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`)
  })
})

module.exports = app