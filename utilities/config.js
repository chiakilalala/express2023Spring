const dotenv = require('dotenv')
// dotenv.config()
dotenv.config({path: __dirname + '/../config.env'});
module.exports = {
  DATABASE: process.env.DATABASE,
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
  PORT: process.env.PORT,
  host: process.env.NODE_ENV === 'development' ? 'localhost:5200' : 'six-northnode.onrender.com'
}