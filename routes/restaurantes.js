const pool = require('../helpers/database')
const express = require('express')
const router = express.Router()

// Route to Add restaurant on db - CREATE
router.post('/', async (request, response) => {
  const { name, address } = request.body

  try {
    const createRestaurantQuery =
      'INSERT INTO restaurantes (name, address) VALUES (?, ?)'
    await pool.query(createRestaurantQuery, [name, address])

    response.status(200).json('Inserido com sucesso')
  } catch (error) {
    response.status(400).json(error)
  }
})

// Route to Get restaurant list on db - READ
router.get('/', async (request, response) => {
  try {
    const getRestaurantQuery = 'SELECT * FROM restaurantes'
    const rows = await pool.query(getRestaurantQuery)

    response.status(200).json(rows)
  } catch (error) {
    response.status(400).json(error)
  }
})

// Get one restaurant by id - READ
router.get('/:id', async (request, response) => {
  const { id } = request.params

  try {
    const getRestaurantQueryById = 'SELECT * FROM restaurantes WHERE id = ?;'
    const rows = await pool.query(getRestaurantQueryById, id)

    response.status(200).json(rows)
  } catch (error) {
    response.status(400).json(error)
  }
})

// Route to Update restaurant on db - UPDATE
router.put('/:id', async (request, response) => {
  const { id } = request.params
  const { name, address } = request.body

  try {
    const updateRestaurantQuery =
      'UPDATE restaurantes SET name = ?, address = ? WHERE id = ?'
    const rows = await pool.query(updateRestaurantQuery, [name, address, id])

    response.status(200).json('Alterado com sucesso')
  } catch (error) {
    response.status(400).json(error)
  }
})

// Route to Delete restaurant on db - DELETE
router.delete('/:id', async (request, response) => {
  const { id } = request.params

  try {
    const deleteRestaurantQuery = 'DELETE FROM restaurantes WHERE id = ?'
    const rows = await pool.query(deleteRestaurantQuery, id)

    response.status(200).json('Apagado com sucesso')
  } catch (error) {
    response.status(400).json(error)
  }
})

module.exports = router
