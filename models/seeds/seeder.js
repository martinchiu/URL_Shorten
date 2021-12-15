const db = require('../../config/mongoose')
const URL = require('../URL')
const seedsData = require('./seeds.json').results

db.once('open', () => {
  URL.create(seedsData)
    .then(() => {
      console.log('done')
      db.close()
    })
    .catch(error => console.log(error)) 
})