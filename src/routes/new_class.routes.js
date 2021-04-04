const express = require('express')
const router = express.Router()
const new_classController = require('../controllers/new_class.controller');
// Retrieve all employees
router.get('/', new_classController.findAll);
// Create a new employee
router.post('/', new_classController.create);
// Retrieve a single employee with id
//router.get('/: pilih.: value', new_classController.findBypilih);
router.get('/:search', new_classController.getdata);
//router.get('/:class_namesort', new_classController.searchClass);
router.get('/sort', new_classController.sortlevel);
router.get('/sort', new_classController.sortcategory);
router.get('/sort', new_classController.sortpricing);



// Update a course with id
router.put('/:id', new_classController.update);
// Delete a courses with id
router.delete('/:id', new_classController.delete);

module.exports = router