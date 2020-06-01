const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');
const colors = require('colors');
const bodyParser = require("body-parser");

//load env vars
dotenv.config({
  path: './config/config.env',
});

//connect to DB
connectDB();

//Bringing Routes file
const bootcamps = require('./routes/bootcamps');

const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
//Body parser
app.use(express.json());

//Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(
    `Server is listening on Port ${PORT} in ${process.env.NODE_ENV}`.yellow.bold
  )
);