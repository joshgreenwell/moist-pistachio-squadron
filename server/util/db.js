const mongoose = require('mongoose')
const logger = require('./logger')

mongoose.Promise = Promise

const connect = () => {
  const url = process.env.MONGODB_URI
  
  mongoose.connect(url, { useNewUrlParser: true })
  const db = mongoose.connection

  db.on('error', err =>
    logger.error(`Failed to connect to db: ${err}`)
  )
  db.on('connected', () =>
    logger.info(`Connected to db`)
  )
}

// Schemas
const userSchema = new mongoose.Schema({
  userName: String,
  password: String,
  admin: Boolean
})

const memberSchema = new mongoose.Schema({
  icon: String,
  name: String,
  race: String,
  class: String,
  spec: String,
  role: String,
  active: Boolean
})

// Modals
const User = new mongoose.model('user', userSchema)

const Member = new mongoose.model('member', memberSchema)

// Connect to db
if (mongoose.connection.readyState !== 1) {
  logger.info('Connecting to db...')
  connect()
}

module.exports = {
  User,
  Member
}