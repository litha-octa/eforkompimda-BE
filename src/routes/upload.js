const Router = require("express").Router();
const multerUploadImage = require("../middle/upload");
const all_classController = require('../controllers/allClass');




Router.post("/", multerUploadImage.single("image"), (req, res) => {
    //console.log(req.body)
    const { file } = req;
    const url = `/image/${file.filename}`;
    res.status(200).json({
        msg: "Upload Success",
        url,
    });
});



Router.patch("/", all_classController.update, multerUploadImage.single("image"), (req, res) => {
    //console.log(req.body)
    const { file } = req;
    const url = `/image/${file.filename}`;
    res.status(200).json({
        msg: "Upload Success",
        url,
    });
});

module.exports = Router;