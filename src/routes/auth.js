//require("dotenv").config();
const express = require('express')
const router = express.Router()

const autcontroller = require("../controllers/auth");
// Router.get("/", (_, res) => {
//   res.json({
//     message: "auth",
//   });
// });

// login
router.post("/login", autcontroller.login);

// register
router.post("/register", autcontroller.register);

// logout
//Router.delete("/logout", (req, res) => { });

module.exports = router;