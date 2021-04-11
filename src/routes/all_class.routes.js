const express = require('express')
const router = express.Router()
const all_classController = require('../controllers/all_class.controller');

router.get('/', all_classController.findAll);

router.post('/', all_classController.create);

router.get('/:search', all_classController.getdata);


router.get('/sort', all_classController.sortlevel);
router.get('/sort', all_classController.sortcategory);
router.get('/sort', all_classController.sortpricing);

// Update a course with id
router.put('/:id', all_classController.update);
// Delete a courses with id
router.delete('/:id', all_classController.delete);

module.exports = router