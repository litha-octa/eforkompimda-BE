'use strict';
const dbConn = require('./../../config/db.config');

const newClass = function (all_class) {
    this.class_name = all_class.class_name;
    this.category_id = all_class.category_id;
    this.description = all_class.description;
    this.level_id = all_class.level_id;
    this.pricing = all_class.pricing;
};
newClass.create = function (createclass, result) {
    dbConn.query("INSERT INTO all_class set ?", createclass, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(res.insertclass_id);
            result(null, res.insertclass_id);
        }
    });
};


newClass.findBySearch = function (qsValue) {
    return new Promise((resolve, reject) => {
        dbConn.query("Select  all_class.class_id, all_class.class_name, category.category_name AS 'category', all_class.description, level.level_name AS 'level', all_class.pricing FROM all_class INNER JOIN category on all_class.category_id=category.category_id JOIN level on all_class.level_id=level.level_id where class_name like ? ORDER BY ? ?", qsValue, (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        });
    });
};


newClass.sortlevel = function (qsValue) {
    return new Promise((resolve, reject) => {
        dbConn.query("Select * from all_class where level like ? ORDER BY ? ?", qsValue, (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        });
    });
};
newClass.sortcategory = function (qsValue) {
    return new Promise((resolve, reject) => {
        dbConn.query("Select * from all_class where category like ? ORDER BY ? ?", qsValue, (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        });
    });
};
newClass.sortpricing = function (qsValue) {
    return new Promise((resolve, reject) => {
        dbConn.query("Select * from all_class where pricing like ? ORDER BY ? ?", qsValue, (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        });
    });
};



// newClass.findByclass_id = function (class_id, result) {
//     dbConn.query("Select * from all_class where class_id = ? ", class_id, function (err, res) {
//         if (err) {
//             console.log("error: ", err);
//             result(err, null);
//         }
//         else {
//             result(null, res);
//         }
//     });
// };

// newClass.findBycategory = function (category, result) {
//     dbConn.query("Select * from all_class where category = ? ", category, function (err, res) {
//         if (err) {
//             console.log("error: ", err);
//             result(err, null);
//         }
//         else {
//             result(null, res);
//         }
//     });
// };

// newClass.findBylevel = function (level, result) {
//     dbConn.query("Select * from all_class where level = ? ", level, function (err, res) {
//         if (err) {
//             console.log("error: ", err);
//             result(err, null);
//         }
//         else {

//             result(null, res);
//         }
//     });
// };

// newClass.findBypricing = function (pricing, result) {
//     dbConn.query("Select * from all_class where pricing = ? ", pricing, function (err, res) {
//         if (err) {
//             console.log("error: ", err);
//             result(err, null);
//         }
//         else {
//             result(null, res);
//         }
//     });
// };

newClass.findAll = function (result) {
    dbConn.query("SELECT class_id, class_name, category.category_name, description, level.level_name, pricing FROM all_class INNER JOIN category on all_class.category_id=category.category_id JOIN level on all_class.level_id=level.level_id", function (err, res) {
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



newClass.update = function (class_id, all_class, result) {
    dbConn.query("UPDATE all_class SET class_name=?,category=?,description=?,level=?,pricing=? WHERE class_id = ?",
        [all_class.class_name, all_class.category, all_class.description, all_class.level, all_class.pricing, class_id], function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(null, err);
            }
            else {
                result(null, res);
            }
        });
};
newClass.delete = function (input_id, result) {
    dbConn.query("DELETE FROM all_class WHERE class_id = ?", [input_id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
module.exports = newClass;