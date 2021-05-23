//const mysql = require("mysql");
const UserClass = require('../models/userClass');

exports.findClassByUser = function (req, res) {
    UserClass.findClassByUser(function (err, user_class) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', user_class);
        res.send({ result: user_class });
    }
    );
};
exports.findUsersByClass = function (req, res) {
    UserClass.findUsersByClass(function (err, user_class) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', user_class);
        res.send({ result: user_class });
    }
    );
};