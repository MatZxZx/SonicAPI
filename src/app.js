const express = require('express')
const morgan = require('morgan')
const dotenv = require('dotenv')

const sv = express()

dotenv.config()

sv.use(morgan('dev'))
sv.use(express.json())

sv.use('/game', require('./routes/games_routes'))

sv.set('PORT', process.env.PORT)

module.exports = sv