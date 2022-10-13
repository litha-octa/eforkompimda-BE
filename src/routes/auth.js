//require("dotenv").config();
const express = require('express')
const router = express.Router()

const autcontroller = require("../controllers/auth");

//LOGIN
router.post("/", autcontroller.login);

//REGISTER
router.post("/register", autcontroller.register);


module.exports = router;