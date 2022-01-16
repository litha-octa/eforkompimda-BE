const dbConn = require('./../../config/db.config');
const bcrypt = require('bcrypt');
//const jwt = require('jsonwebtoken');

exports.updateUserById = (data, user_id) => {
    const qs = 'UPDATE user SET ? WHERE user_id = ? ';
    const updated = [data, user_id];
    return new Promise((resolve, reject) => {
        data.password
            ? bcrypt.hash(data.password, 10, (err, encryptedPass) => {
                if (err) return reject({ status: 500 });

                data.password = encryptedPass;

                dbConn.query(qs, updated, (err, result) => {
                    if (err) {
                        reject({
                            status: 500,
                        });
                    } else {
                        if (result.affectedRows === 0)
                            return reject({
                                status: 401,
                                success: false,
                                msg: 'This account does not exist',
                            });
                        resolve(result);
                    }
                });
            })
            : dbConn.query(qs, updated, (err, result) => {
                if (err) {
                    reject({ status: 500 });
                } else {
                    resolve(result);
                }
            });
    });
};

exports.getUser = (email) => {
  const qs = "SELECT * FROM user WHERE email = ? ";
  return new Promise((resolve, reject) => {
    dbConn.query(qs, email, (err, result) => {
      if (err) {
        reject({ status: 500 });
      } else {
        if (result.length === 0)
          return reject({
            status: 401,
            success: false,
            msg: "This account does not exist",
          });

        result[0].role = result[0].role_id === 1 ? "student" : "teacher";
        resolve(result);
      }
    });
  });
};

//module.exports = updateUserById;