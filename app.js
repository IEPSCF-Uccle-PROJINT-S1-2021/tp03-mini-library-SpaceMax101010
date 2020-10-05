const express = require('express');
const logger = require('morgan');
const books = require('./books');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.use(logger('dev'));
app.use('/', books);
app.use('/static', express.static('public'));
app.use(bodyParser.urlencoded({extended : false}));





app.listen(4242, () => {
  console.log('Express.js server listening on http://127.0.0.1:4242/');
});
