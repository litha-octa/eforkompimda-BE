const express = require('express')
const router = express.Router()
const coursesController = require('../controllers/courses.controller');
// Retrieve all employees
router.get('/', coursesController.findAll);
// Create a new employee
//router.post('/', coursesController.create);
// Retrieve a single employee with id
router.get('/:column.:value', coursesController.findBycolumn);



// Update a employee with id
router.put('/:id', coursesController.update);
// Delete a employee with id
router.delete('/:id', coursesController.delete);

module.exports = router