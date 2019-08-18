const express = require('express')
const environment = require('dotenv').config()

const logger = require('./util/logger')
const db = require('./util/db')

environment.error
  ? logger.error('Failed to load environment variables')
  : logger.info('Environment variables loaded')

const app = express()
const port = process.env.PORT || 8000

app.get('/members', (req, res) => {
  logger.info('/members')
  return res.sendStatus(200)
})

app.post('/login', (req, res) => {
  logger.info('/login')
  return res.sendStatus(200)
})

app.listen(port, () => logger.info(`Listening on port ${port}`))