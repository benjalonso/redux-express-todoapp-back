const PORT = process.env.PORT || 3000

const DB_HOST = process.env.DB_HOST || 'localhost'
const DB_USER = process.env.DB_USER || 'postgres'
const DB_PASSWORD = process.env.DB_PASSWORD || 'root'
const DB_NAME = process.env.DB_NAME || 'postgres'
const DB_PORT = process.env.DB_PORT || 5432


module.exports = { DB_PORT,DB_HOST,DB_NAME,DB_PASSWORD,DB_USER,PORT}
