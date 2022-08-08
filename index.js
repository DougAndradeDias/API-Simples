const dotenv = require('dotenv')
const express = require('express')

dotenv.config({ path: '.env' })

const PORT = process.env.PORT || '3000'

const app = express()

/**
 * Middlewares
 */
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

/**
 * Routes
 */

app.get('/', (request, response) => {
  response
    .status(200)
    .send('Para experiemtar a aplicação, vá para a rota /restaurantes')
})

/**
 * Listening
 */
app.listen(PORT, () => {
  console.log(`Start app in port ${PORT}`)
})
