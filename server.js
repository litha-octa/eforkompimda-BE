require("dotenv").config();
const express = require('express');
const { PORT } = process.env;
//const newclassController = require('./src/controllers/all_class.controller')
const app = express();// Setup server port
const port = PORT// prse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))// parse requests of content-type - application/json
app.use(express.json())// define a root route
app.get('/', (req, res) => {
  res.send("Hello World");
});
const newclassRoutes = require('./src/routes/all_class.routes')
const loginRegist = require('./src/routes/auth')
const pagination = require('./src/routes/pagination')
app.use('/api/v1/newclass', newclassRoutes)
app.use('/api/v1/auth', loginRegist)
app.use('/api/v1/pag', pagination)
// const mycoursesRoutes = require('./src/routes/courses.routes')
// app.use('/api/v1/mycourses', mycoursesRoutes)
// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
