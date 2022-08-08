const pool = require('../helpers/database')
const express = require('express')
const router = express.Router()

router.get('/', (request, response) => {
  response.status(200).send('Rota funcionado')
})

// Route to Add restaurant on db - CREATE
router.post('/', (request, response) => {
  const content = request.body

  response.status(200).json(content)
})

module.exports = router
