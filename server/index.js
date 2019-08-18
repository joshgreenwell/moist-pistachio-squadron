const express = require('express')
const environment = require('dotenv').config()

const logger = require('./util/logger')
const { User, Member } = require('./util/db')

environment.error
  ? logger.error('Failed to load environment variables')
  : logger.info('Environment variables loaded')

const app = express()
const port = process.env.PORT || 8000

app.get('/members', (req, res) => {
  logger.info('GET: /members')
  Member.find({ active: true })
    .then(resp => {
      logger.info(`Found ${resp.length} active members`)
      res.json(resp)
    })
})

app.post('/login', (req, res) => {
  logger.info('POST: /login')
  const { userName, password } = req.body

  return res.sendStatus(200)
})

app.listen(port, () => logger.info(`Listening on port ${port}`))