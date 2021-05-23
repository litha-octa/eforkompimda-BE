const Router = require('express').Router();
const userModel = require('../controllers/profile');
const multerUpload = require('../middle/upload');

// UPDATE 
Router.patch('/:id', multerUpload.any(), userModel.updateUserById);

Router.get("/:id", multerUpload.any(), userModel.getUser);


module.exports = Router;