const express = require('express')
const router = express.Router()
const UserClass = require('../controllers/userClass');
//const authorize = require("../middle/authorize");

//UNTUK MENCARI SEMUA KELAS YANG DIIKUTI OLEH SALAH SATU USER
router.get("/userclass", UserClass.findClassByUser);

//UNTUK MENCARI NAMA USER YANG MENGIKUTI SUATU KELAS
router.get("/classmember", UserClass.findUsersByClass);


module.exports = router