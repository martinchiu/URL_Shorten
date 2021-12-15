// 引入第三方套件
const express = require('express')
const exphbs = require('express-handlebars')

// 引入自建套件
require('./config/mongoose')
const URL =require('./models/URL')
const routes= require('./routes')

// 啟動 express
const app = express()

// 設定連接阜
const PORT = 3000

// 設定模板引擎
app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: 'hbs'}))
app.set('view engine', 'hbs')

// 引入 body-parser
app.use(express.urlencoded({ extended: true }))

// 將 request 導入路由器
app.use(routes)


app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})