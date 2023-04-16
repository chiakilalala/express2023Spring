require('module-alias/register') // alias 別名 @ 為根目錄
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const serviceDB = require('@/services/serviceDB') 

// router
var indexRouter = require("./routes/index");
// const routeExample = require('./routes/routeExample') // 引入自訂的 routeExample
const routePosts = require('./routes/routePosts') // 引入自訂的 routePosts

const app = express() // 建立 express 的實體
serviceDB.connections() // 建立資料庫連線

// Load middleware  判斷環境
const middlewareError = require('@/middlewares/middlewareError')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

// Set up routes
app.use("/", indexRouter);
// app.use('/example', routeExample)
app.use('/posts', routePosts)

// Set up error handler
//環境變數指令切換Dev或Prod、客製錯誤訊息(要放在router下面)
app.use(middlewareError) 



// Set up error handler
app.use(middlewareError)

// 程式出現重大錯誤時
process.on('uncaughtException', (err) => {
  // 記錄錯誤下來，等到服務都處理完後，停掉該 process
  console.error('Uncaughted Exception！')
  console.error(err)
  process.exit(1)
})

// 未捕捉到的 catch
process.on('unhandledRejection', (err, promise) => {
  console.error('未捕捉到的 rejection：', promise, '原因：', err)
})

module.exports = app;