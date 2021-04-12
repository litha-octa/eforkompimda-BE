// const Router = require("express").Router();
// const authorize = require("../middle/authorize");


// Router.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     if (req.method === "OPTIONS") {
//         res.header("Access-Control-Allow-Methods", "GET,PATCH,POST,DELETE,OPTIONS");
//         res.header("Access-Control-Allow-Headers", "x-access-token");
//         return res.sendStatus(200);
//     }
//     next();
//     // res.send(200);
// });
// Router.get("/student", authorize.student);

// Router.get("/teacher", authorize.teacher);

// //const authMiddleware = require("../middlewares/authorize");
// Router.get("/", authorize.byRole("student"), (req, res) => {
//     res.json({ msg: "Hello" });
// });

// module.exports = Router;