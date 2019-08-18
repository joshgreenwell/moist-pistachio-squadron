const mongo = require('mongodb').MongoClient
const logger = require('./logger')

const url = process.env.MONGODB_URI

const instance = (collection) => mongo.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err, client) => {
  if (err) {
    logger.error(err)
    return
  }
  const db = client.db('mps').collection(collection)
  logger.info(`Connected to mps db: ${collection} collection`)



  client.close()
})

module.exports = {
  instance
}