const Router = require('express').Router();
const userModel = require('../controllers/profile');
const multerUpload = require('../middle/upload');

// UPDATE 
Router.patch('/:id', multerUpload.any(), userModel.updateUserById);


module.exports = Router;