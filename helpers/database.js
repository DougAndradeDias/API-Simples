const dotenv = require('dotenv')
const mariadb = require('mariadb')

dotenv.config({ path: '../.env' })

const pool = mariadb.createPool({
  host: process.env.HOST,
  user: process.env.USER_DB,
  password: process.env.PASS_DB,
  database: process.env.DB_NAME,
  connectionLimit: 5
})

pool.getConnection((error, connection) => {
  if (error) {
    console.log(error.code)
  }

  if (connection) {
    connection.release()
  }

  return
})

// module.exports = pool
