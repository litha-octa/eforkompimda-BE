'use strict';
const dbConn = require('./../../config/db.config');

const newClass = function (all_class) {
    this.class_name = all_class.class_name;
    this.category_id = all_class.category_id;
    this.description = all_class.description;
    this.level_id = all_class.level_id;
    this.schedule = all_class.schedule;
    this.pricing = all_class.pricing;
    this.avatar = all_class.avatar;
};
newClass.create = function (createclass, result) {
    //const added = [data, createclass];
    console.log(createclass)
    dbConn.query("INSERT INTO all_class set ?", createclass, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(res);
            result(null, res.insertclass_id);
        }
    });
};
newClass.findBySearch = function (qsValue) {
    return new Promise((resolve, reject) => {
        dbConn.query(
          "Select  all_class.class_id, all_class.class_name, category.category_name AS 'category' all_class.description, level.level_name AS 'level', all_class.pricing FROM all_class INNER JOIN category on all_class.category_id=category.category_id JOIN level on all_class.level_id=level.level_id where class_name like ? ORDER BY ? ?",
          qsValue,
          (err, res) => {
            if (err) {
              reject(err);
            } else {
              resolve(res);
            }
          }
        );
    });
};


newClass.findById = (id) => {
  const qs = "Select all_class.class_id AS 'ID', all_class.class_name AS 'Class Name', category.category_name AS 'Category', all_class.description AS 'Description',  level.level_name AS 'Level', all_class.pricing AS 'Price', all_class.schedule AS 'Schedule', all_class.avatar AS 'Image' from all_class  INNER JOIN category on all_class.category_id=category.category_id JOIN level on all_class.level_id=level.level_id  WHERE class_id= ?";
  return new Promise((resolve, reject) => {
    dbConn.query(qs, id, (err, result) => {
      if (err) {
        reject({ status: 500 });
        console.log("msg : Masalah Pada Server");
      } else {
        if (result.length === 0)
          return reject({
            status: 401,
            success: false,
            msg: "barang tidak ditemukan",
          });
        resolve(result);
      }
    });
  });
};

newClass.sort = function (qsValue) {
    return new Promise((resolve, reject) => {
        dbConn.query(
          "Select all_class.class_name, category.category_name AS 'category',all_class.description, level.level_name AS 'level', all_class.pricing  FROM all_class JOIN category on all_class.category_id=category.category_id JOIN level on all_class.level_id=level.level_id ORDER BY ? ?",
          qsValue,
          (err, res) => {
            if (err) {
              reject(err);
            } else {
              resolve(res);
            }
          }
        );
    });
};
// newClass.sortcategory = function (qsValue) {
//     return new Promise((resolve, reject) => {
//         dbConn.query(
//           "Select all_class.class_name, category.category_name AS 'category',all_class.description, level.level_name AS 'level', all_class.pricing  FROM all_class JOIN category on all_class.category_id=category.category_id JOIN level on all_class.level_id=level.level_id ORDER BY ? ?",
//           qsValue,
//           (err, res) => {

//             if (err) {
//               reject(err);
//             } else {
//               resolve(res);
//             }
//           }
//         );
//     });
// };
// newClass.sortpricing = function (qsValue) {
//     return new Promise((resolve, reject) => {
//         dbConn.query(
//           "Select all_class.class_name, category.category_name AS 'category',all_class.description, level.level_name AS 'level', all_class.pricing  FROM all_class JOIN category on all_class.category_id=category.category_id JOIN level on all_class.level_id=level.level_id  ORDER BY ? ?",
//           qsValue,
//           (err, res) => {
//             if (err) {
//               reject(err);
//             } else {
//               resolve(res);
//             }
//           }
//         );
//     });
// };



newClass.filterCategory = function (qsValue) {
     return new Promise((resolve, reject) => {
    dbConn.query(
      "Select all_class.class_name, category.category_name AS 'category',all_class.description, level.level_name AS 'level', all_class.pricing FROM all_class JOIN category on all_class.category_id=category.category_id JOIN level on all_class.level_id=level.level_id where category.category_id like ?",
      qsValue,
      (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      }
    );
     });
}; 
newClass.filterLevel = function (qsValue) {
  return new Promise((resolve, reject) => {
    dbConn.query(
      "Select all_class.class_name, category.category_name AS 'category',all_class.description, level.level_name AS 'level', all_class.pricing FROM all_class JOIN category on all_class.category_id=category.category_id JOIN level on all_class.level_id=level.level_id where level.level_id like ?",
      qsValue,
      (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      }
    );
  });
}; 
newClass.filterPricing = function (qsValue) {
  return new Promise((resolve, reject) => {
    dbConn.query(
      "Select all_class.class_name, category.category_name AS 'category',all_class.description, level.level_name AS 'level', all_class.pricing FROM all_class JOIN category on all_class.category_id=category.category_id JOIN level on all_class.level_id=level.level_id where pricing like ?",
      qsValue,
      (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      }
    );
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