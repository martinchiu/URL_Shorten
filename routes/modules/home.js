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

// 定義縮短網址的路由
router.post('/shorten', (req, res) => {
  const targetLength = 5                   // 定義亂碼的長度
  let id = ''
  const url = req.body.url
  // 搜尋資料庫內有無已縮短過的原始網址
  URL.find({ url })
    .lean()
    .then(data => {      
      if (data.length === 0) {
        id = createRandom(targetLength)    // 沒有的話產生一個亂碼給新網址
      } else {
        id = data[0].id                    // 輸入相同網址時，直接從資料庫拿出產生過的亂碼
      }
      const shortener = `https://stark-springs-19644.herokuapp.com/${id}`

      return URL.create({ url, id })
        .then(() => res.render('show', { shortener, url }))
        .catch(error => console.log(error))
    })
})

// 匯出路由模組
module.exports = router