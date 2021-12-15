// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()

// 引用 URL model
const URL = require('../../models/URL')

// 引入自建套件
const createRandom = require('../../utility/createRandom')

// 定義首頁路由
router.get('/', (req, res) => {
  res.render('index')
})

// 定義縮短網址路由
router.post('/shorten', (req, res) => {
  const targetLength = 5

  const url = req.body.url
  const id = createRandom(targetLength)
  const shortener = `${url}/${id}`

  return URL.create({ url, id })
    .then(() => res.render('show', { shortener }))
    .catch(error => console.log(error))
})

// 匯出路由模組
module.exports = router