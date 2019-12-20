const chalk = require('chalk');
require('dotenv').config();

const { db } = require('./db');
const app = require('./server');

const PORT = process.env.PORT || 3000;

db.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(chalk.green(`server listening on port: ${PORT}`));
    });
  })
  .catch(e => {
    console.error('Error syncing database', e);
  });
