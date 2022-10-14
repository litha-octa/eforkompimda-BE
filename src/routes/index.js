//require("dotenv").config();
const express = require('express')
const router = express.Router()
const multerUpload = require("../middle/upload");


const auth = require("../controllers/auth");
const profile = require("../controllers/profile");
const review =require("../controllers/review")

//LOGIN
router.post("/authentication/", auth.login);
//REGISTER
router.post("/authentication/register", auth.register);


// UPDATE Profile
router.patch('/user/update/:id', multerUpload.any(), profile.updateUserById);
//GET USER BY NIK
router.get("/user/:nik", profile.getUserByNik);
//GET ALL USER
router.get("/user", profile.getAllUser);

//GET REVIEW BY ID
router.post("/user-review/create/", review.createReview);
router.get("/user-review/by/:id", review.getReviewByUser);
router.get("/user-review/:id", review.getReviewById);

router.get("/user-review", review.getAllReview);

// router.get("/user/:nik", profile.getUserToken);


module.exports = router;