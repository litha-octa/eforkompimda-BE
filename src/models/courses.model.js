'use strict';
let dbConn = require('./../../config/db.config');

let myCourses = function (courses) {
    this.class_name = courses.class_name;
    this.category = courses.category;
    this.description = courses.description;
    this.progress = courses.progress;
    this.status = courses.status;
    this.score = courses.score;
};

// newClass.create = function (createclass, result) {
//     dbConn.query("INSERT INTO new_class set ?", createclass, function (err, res) {
//         if (err) {
//             console.log("error: ", err);
//             result(err, null);
//         }
//         else {
//             console.log(res.insertId);
//             result(null, res.insertId);
//         }
//     });
// };

myCourses.findByid = function (id, result) {
    dbConn.query("Select * from courses where id = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

myCourses.findBycategory = function (category, result) {
    dbConn.query("Select * from courses where category = ? ", category, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

myCourses.findBystatus = function (status, result) {
    dbConn.query("Select * from courses where status = ? ", status, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {

            result(null, res);
        }
    });
};

myCourses.findAll = function (result) {
    dbConn.query("Select * from courses", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('class name : ', res);
            result(null, res);
        }
    });
};

// myCourses.update = function (id, courses, result) {
//     dbConn.query("UPDATE courses SET class_name=?,category=?,description=?,progress=?,status=?,score=?WHERE id = ?",
//         [myCourses.class_name, myCourses.category, myCourses.description, myCourses.progress, myCourses.status, myCourses.score, id], function (err, res) {
//             if (err) {
//                 console.log("error: ", err);
//                 result(null, err);
//             }
//             else {
//                 result(null, res);
//             }
//         });
// };

// myCourses.delete = function (id, result) {
//     dbConn.query("DELETE FROM courses WHERE id = ?", [id], function (err, res) {
//         if (err) {
//             console.log("error: ", err);
//             result(null, err);
//         }
//         else {
//             result(null, res);
//         }
//     });
// };

module.exports = myCourses;