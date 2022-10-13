require("dotenv").config();
const morgan = require('morgan');
const express = require('express');
const cors = require('cors');
const { PORT } = process.env;

const app = express();
const port = PORT
app.use(express.urlencoded({ extended: true }))
app.use(cors());
app.use(express.json())
app.use(express.static("public"))
app.use(morgan('dev'))


app.get('/', (req, res) => {
  res.send("Hello World");
});
const loginRegist = require('./src/routes/auth')
const upprof = require('./src/routes/profile')



app.use('/authentication', loginRegist)
app.use('/get-user', upprof)



app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

