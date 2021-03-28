const express = require('express')
const router = express.Router()
const new_classController = require('../controllers/new_class.controller');
// Retrieve all employees
router.get('/', new_classController.findAll);
// Create a new employee
router.post('/', new_classController.create);
// Retrieve a single employee with id
router.get('/:pilih.:value', new_classController.findBypilih);



// Update a employee with id
router.put('/:id', new_classController.update);
// Delete a employee with id
router.delete('/:id', new_classController.delete);

module.exports = router