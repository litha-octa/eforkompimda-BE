const express = require('express');
const router = express.Router();
const paginationController = require("../controllers/pagination");
// params => path params(:), query params(?)
router.get("/", paginationController.getPagination);

// Router.get("/", authorize.managerOnly, videogamesHandler.getAllVideogames);

// Router.get("/:id", authorize.VIPOnly, videogamesHandler.getVideogamesWithId);

module.exports = router;