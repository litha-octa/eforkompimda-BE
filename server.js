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
const newclassRoutes = require('./src/routes/all_class.routes')
const loginRegist = require('./src/routes/auth')
const upload = require('./src/routes/upload')
const upprof = require('./src/routes/profile')
const userClass = require('./src/routes/userClass')



app.use('/api/v1/newclass', newclassRoutes)
app.use('/authentication', loginRegist)
app.use('/api/v1/up', upload)
app.use('/get-user', upprof)
app.use('/api/v1/usrcls', userClass)



app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

