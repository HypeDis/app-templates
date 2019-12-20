const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

const app = express();

if (process.env.NODE_ENV !== 'production') app.use(morgan('dev'));

app.use(
  morgan('common', {
    stream: fs.createWriteStream(path.join(__dirname, 'access.log'), {
      flags: 'a',
    }),
  })
);

app.use(express.json());

app.use('/api', require('./api'));

app.get('/', (req, res) => {
  res.status(200).send('hello');
});

app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

module.exports = app;
