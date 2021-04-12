const express = require('express')
const router = express.Router()
const all_classController = require('../controllers/all_class.controller');
const authorize = require("../middle/authorize");

//without Authorize
//router.get('/', all_classController.findAll);
//router.post('/', all_classController.create);
// router.put('/:id', all_classController.update);
// router.delete('/:id', all_classController.delete);


router.get('/:search', all_classController.getdata);
router.get('/sort', all_classController.sortlevel);
router.get('/sort', all_classController.sortcategory);
router.get('/sort', all_classController.sortpricing);


router.get("/", authorize.student, all_classController.findAll);
router.post("/", authorize.teacher, all_classController.create);
router.put('/:id', authorize.teacher, all_classController.update);
router.delete('/:id', authorize.teacher, all_classController.delete);

module.exports = router