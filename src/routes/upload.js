const Router = require("express").Router();
const multerUploadImage = require("../middle/upload");



Router.post("/", multerUploadImage.single("image"), (req, res) => {
    //console.log(req.body)
    const { file } = req;
    const url = `/images/${file.filename}`;
    res.status(200).json({
        msg: "Upload Success",
        url,
    });
});

module.exports = Router;