# URL Shortener
首頁畫面上有一個表單，使用者可以在表單輸入原始網址，如 https://www.facebook.com；送出表單之後，畫面會回傳格式化後的短網址，如 localhost:3000/asd34

## 畫面呈現
### 首頁
![首頁](https://github.com/martinchiu/URL_Shorten/blob/main/image/2.3-縮短網址-首頁.png)
### 縮短網址後
![縮短網址後](https://github.com/martinchiu/URL_Shorten/blob/main/image/2.3-縮短網址-縮短後.png)

## 功能
- 使用者可以在表單輸入原始網址，如 https://www.facebook.com；送出表單之後，畫面會回傳格式化後的短網址，如 localhost:3000/asd34
- 使用者可以在瀏覽器的網址列，輸入你提供的短網址（如 https://your-project-name.herokuapp.com/6y7UP），瀏覽器就會導向原本的網站（如 https://www.google.com）
- 使用者可以按 Copy 來複製縮短後的網址
- 使用者可以點擊縮短後的網址，瀏覽器就會導向原本的網站
- 使用者縮短網址後，可以點擊 back 回到首頁繼續使用縮短網址的功能

## 使用說明
1. 請先確認有安裝 node.js 與 npm
2. 打開終端機 (Terminal)，並複製 (Clone) 此專案至本機電腦
```
git clone https://github.com/martinchiu/URL_Shorten.git
```
3. 進入專案資料夾
```
cd restaurant-list
```
4. 安裝所需套件
```
npm install
```
5. 啟動MongoDB 伺服器及創建資料庫並命名「URL」
6. 產生一組種子資料給資料庫
```
npm run seed
```
7. 快速啟動（如果要進入開發者模式，請輸入：npm run dev，請先確保有安裝nodemon)
```
npm run start
``` 
8. 在瀏覽器網址列輸入 `http://localhost:3000/` 瀏覽網站
9. 若欲暫停使用
```
ctrl + c ( mac : command + .)
```

## 開發工具
- Node.js 14.16.0
- Express 4.17.1
- Express-Handlebars 6.0.2
- Bootstrap 4.3.1
- mongoose 6.1.2