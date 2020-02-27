const express = require('express');
const app = express();
const { PORT } = require('./config');
const connectDb = require('./db');
const chalk = require('chalk');
const routes = require('./routes');

connectDb();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

app.use('/', routes);

app.listen(PORT || 3000, () => {
  console.log(chalk.red.bgGreen.bold('Server is up and running on port', PORT));
});
