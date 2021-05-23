const express = require('express')
const router = express.Router()
const all_classController = require('../controllers/allClass');
const authorize = require("../middle/authorize");
const pagination = require("../controllers/pagination");
const multerUpload = require('../middle/upload');


// router.get("/",);
//without Authorize
//router.get('/', all_classController.findAll);
//router.post('/', all_classController.create);
// router.put('/:id', all_classController.update);
// router.delete('/:id', all_classController.delete);

//SORT AND SEARCH FOR STUDENT
//router.get('/:search', all_classController.getdata);
router.get('/sort', all_classController.sortlevel);
router.get('/sort', all_classController.sortcategory);
router.get('/sort', all_classController.sortpricing);

//SORT AND SEARCH FOR TEACHER
router.get('/', pagination.getPagination, all_classController.getdata);
router.get('/sort', authorize.teacher, pagination.getPagination, all_classController.sortlevel);
//router.get('/', pagination.getPagination, all_classController.sortlevel, (req, res) => {
//    res.send("sortby=" + req.params.level);
//});

router.get('/sort', authorize.teacher, pagination.getPagination, all_classController.sortcategory);
router.get('/sort', authorize.teacher, pagination.getPagination, all_classController.sortpricing);

//READ-ONLY CLASS FOR STUDENT
//router.get("/", pagination.getPagination, all_classController.getdata);

//CRUD FOR TEACHER
// router.get("/", authorize.teacher, pagination.getPagination, all_classController.findAll);
// router.post("/", authorize.teacher, pagination.getPagination, all_classController.create);
// router.put('/:id', authorize.teacher, pagination.getPagination, all_classController.update);
// router.delete('/:id', authorize.teacher, pagination.getPagination, all_classController.delete);


router.post("/create", multerUpload.any(), all_classController.create);

module.exports = router