const express = require('express');
const app = express();// Setup server port
const port = 8300;// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))// parse requests of content-type - application/json
app.use(express.json())// define a root route
app.get('/', (req, res) => {
  res.send("Hello World");
});
const newclassRoutes = require('./src/routes/new_class.routes')
app.use('/api/v1/newclass', newclassRoutes)

const mycoursesRoutes = require('./src/routes/courses.routes')
app.use('/api/v1/mycourses', mycoursesRoutes)
// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
