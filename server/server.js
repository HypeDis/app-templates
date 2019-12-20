const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

const app = express();
const clientPath = path.resolve(__dirname, '../client');

if (process.env.NODE_ENV !== 'production') app.use(morgan('dev'));

app.use(
  morgan('common', {
    stream: fs.createWriteStream(path.join(__dirname, 'access.log'), {
      flags: 'a',
    }),
  })
);

app.use(express.static(path.resolve(clientPath, 'dist')));
app.use(express.static(path.resolve(clientPath, 'public')));
app.use(express.json());

app.use('/api', require('./api'));

app.get('*', (req, res) => {
  res.status(200).sendFile(path.resolve(clientPath, 'public/index.html'));
});

app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

module.exports = app;
