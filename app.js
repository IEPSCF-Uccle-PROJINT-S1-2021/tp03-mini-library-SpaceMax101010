const express = require('express');
const logger = require('morgan');
const books = require('./books');
const path = require('path');
const app = express();

app.use('/', books);
app.use(logger('dev'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.listen(4242, () => {
  console.log('Express.js server listening on http://127.0.0.1:4242/');
});
