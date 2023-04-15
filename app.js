const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

// router
var indexRouter = require("./routes/index");
var postsRouter = require("./routes/posts");
var usersRouter = require("./routes/users");
var app = express();

require('./connections');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());


app.use("/", indexRouter);
app.use("/posts", postsRouter);
app.use("/users", usersRouter);

// �P�B�{���X��
process.on('uncaughtException', err => {
  console.error('Uncaught Exception');
  console.error(err);
  // ����process
  process.exit(1);
});

// handle Express middleware errors
app.use(function(err, req, res, next) {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message
  });
});

// �D�P�B�{�����~(�������쪺 catch) 
process.on('unhandledRejection', (reason, promise) => {
  console.error('�������쪺 rejection�G', promise, '��]�G', reason);
})

module.exports = app;