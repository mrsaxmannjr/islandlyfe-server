const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const beaches = require('./api/beaches');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.get('/', (req, res) => {
  res.json({
    message: 'YO DAWG!',
  });
});

// app.use('/api/v1/beaches', beaches);
app.use('/api/v1/beaches', beaches);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  res.status = (404);
  next(err);
});

app.use((err, req, res, next) => {
  res.status(res.statusCode || 500);
  res.json({
    message: err.message,
    stack: req.app.get('env') === 'development' ? err.stack : {},
  });
});

module.exports = app;
