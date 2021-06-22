const express = require('express')
const router = express.Router()
const all_classController = require('../controllers/allClass');
const authorize = require("../middle/authorize");
const pagination = require("../controllers/pagination");
const multerUpload = require('../middle/upload');

// Get New class with pagination
router.get('/', pagination.getPagination, all_classController.getdata);

// Sort
// how to use?
// metode urutan
// ="AZ" agar berururtan secara ASC
// ="ZA" agar berurutan secara DESC
// "sort" = "pilih kolom yang mau di urutkan"-"metode urutan"
// misalnya category;
// jadi '/sort/?sort=category-AZ' 
router.get("/sort", all_classController.sortpricing);
router.get("/sort", all_classController.sortlevel);
router.get("/sort", all_classController.sortcategory);

// filter
router.get("/category", all_classController.filterCategory);
router.get("/level", all_classController.filterLevel);
router.get("/pricing", all_classController.filterPricing);










//router.post('/', all_classController.create);
// router.put('/:id', all_classController.update);
// router.delete('/:id', all_classController.delete);

// SORT AND SEARCH FOR STUDENT
// router.get('/:search', all_classController.getdata);

// //SORT AND SEARCH FOR TEACHER
// router.get('/', pagination.getPagination, all_classController.getdata);
// router.get('/sort', authorize.teacher, pagination.getPagination, all_classController.sortlevel);

router.post("/create", multerUpload.any(), all_classController.create);

module.exports = router