const Router = require("express").Router();
const multerUploadImage = require("../middle/upload");


Router.post("/upload", multerUploadImage.single("image"), (req, res) => {
    const { file } = req;
    const url = `/images/${file}`;
    res.status(200).json({
        msg: "Upload Success",
        url,
    });
});

module.exports = Router;