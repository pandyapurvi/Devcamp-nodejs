const express = require('express')
const dotenv = require('dotenv')

//Bringing Routes file
const bootcamps = require('./routes/bootcamps');

//load env vars
dotenv.config({
  path: './config/config.env'
})

const app = express();

app.use('/api/v1/bpptcamps', bootcamps);

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server is listening on Port ${PORT} in ${process.env.NODE_ENV}`));