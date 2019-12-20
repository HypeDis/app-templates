const chalk = require('chalk');

require('dotenv').config();
const app = require('./server');

const PORT = process.env.PORT || 3000;

app.listen(PORT || 3000, () => {
  console.log(chalk.green(`server listening on port: ${PORT}`));
});
