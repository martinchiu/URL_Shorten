// 引入第三方套件
const express = require('express')
const exphbs = require('express-handlebars')

// 引入自建套件
require('./config/mongoose')
const URL =require('./models/URL')
const createRandom = require('./utility/createRandom')

// 啟動 express
const app = express()

// 設定連接阜
const PORT = 3000

// 設定模板引擎
app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: 'hbs'}))
app.set('view engine', 'hbs')

// 引入 body-parser
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})
app.post('/shorten', (req, res) => {
  const targetLength = 5

  const url = req.body.url
  const id = createRandom(targetLength)

  return URL.create({ url, id})
    .then(() => res.render('show'))
    .catch(error => console.log(error))
})

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})