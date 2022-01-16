const Router = require('express').Router();
const userModel = require('../controllers/profile');
const multerUpload = require('../middle/upload');

// UPDATE 
Router.patch('/', multerUpload.any(), userModel.updateUserById);

Router.get("/:email", userModel.getUser);


module.exports = Router;