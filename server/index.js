const express = require('express')
const environment = require('dotenv').config()
const cors = require('cors')

const logger = require('./util/logger')
const { User, Member } = require('./util/db')

environment.error
  ? logger.error('Failed to load environment variables')
  : logger.info('Environment variables loaded')

const app = express()
app.use(cors())
const port = process.env.PORT || 8000

app.get('/members', (req, res) => {
  logger.info('GET: /members')

  // TODO: Switch to db
  const rows = [
    { icon: 'J', name: 'Josh', race: 'Troll', spec: 'Holy', class: 'Priest', role: 'Healer' },
    { icon: 'K', name: 'Khory', race: 'Tauren', spec: 'Restoration', class: 'Druid', role: 'Healer' },
    { icon: 'B', name: 'Bri', race: 'Undead', spec: '', class: 'Warlock', role: 'DPS' },
    { icon: 'B', name: 'Brian', race: 'Orc', spec: 'Protection', class: 'Warrior', role: 'Tank' },
    { icon: 'R', name: 'Raf', race: 'Orc', spec: '', class: 'Hunter', role: 'DPS' },
    { icon: 'J', name: 'James', race: '', spec: '', class: '', role: '' }
  ]

  Member.find({ active: true })
    .then(resp => {
      logger.info(`Found ${resp.length} active members`)
      // res.json(resp)
      res.json(rows)
    })
})

app.post('/login', (req, res) => {
  logger.info('POST: /login')
  const { userName, password } = req.body

  return res.sendStatus(200)
})

app.listen(port, () => logger.info(`Listening on port ${port}`))