const mongoose = require('mongoose');
const { DB } = require('./config');
const chalk = require('chalk');

const connectDB = async () => {
  try {
    await mongoose.connect(DB, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true
    });

    console.log(chalk.black.bgMagenta('MongoDb connected !'));
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
