// const Router = require("express").Router();
// const authorize = require("../middle/authorize");
// const auth = require("./auth");
// const upprof = require('./profile');
// const all_class = require('./all_class.routes');
// const UserClass = require('./userClass');


// Router.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     if (req.method === "OPTIONS") {
//         res.header("Access-Control-Allow-Methods", "GET,PATCH,POST,DELETE,OPTIONS");
//         res.header("Access-Control-Allow-Headers", "x-access-token");
//         return res.sendStatus(200);
//     }
//     next();
// });


// Router.use("/auth", auth);
// Router.use('/newclass', all_class);
// Router.use('/upprof', upprof);
// Router.use('/usrcls', userClass);

// Router.post("/", (req, res) => {
//   //  console.log(req.body);
//   res.send(req.body);
// });


// module.exports = Router;