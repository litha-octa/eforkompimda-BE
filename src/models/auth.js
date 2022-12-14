const dbConn = require('./../../config/db.config');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = (body) => {
    return new Promise((resolve, reject) => {
        const { password } = body;
        const qs = "INSERT INTO user SET ?";
        bcrypt.hash(password, 10, (err, encryptedPass) => {
            if (err) return reject(err);

            const bodyWithEncryptedPass = {
                ...body,
                password: encryptedPass,
            };

            dbConn.query(qs, bodyWithEncryptedPass, (err, result) => {
            // dbConn.query(qs, body, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    });
};


const login = (body) => {
  return new Promise((resolve, reject) => {
    const { nik, password } = body;
    const qs =
      //"SELECT user.name, user.password ,role.role_name AS 'role' FROM user JOIN role ON user.role_id = role.role_id WHERE user.email= ?";
      "SELECT * FROM user WHERE nik = ? ";
    dbConn.query(qs, nik, (err, result) => {
      if (err) return reject({ msg: err, status: 500 });
      console.log(result)
      if (result.length === 0)
        return reject({ msg: "Email or Password is Wrong", status: 401 });
      bcrypt.compare(password, result[0].password, (err, isPasswordValid) => {
        console.log(result[0].password, password);
        console.log(isPasswordValid);
        // if (err) return reject({ msg: err, status: 500 });
        if (!isPasswordValid)
          return reject({ msg: "Email or Password is Wrong", status: 401 });
        const {  name, nik, } = result[0];
        const payload = {
          name,
          nik,
        };
        const options = {
          expiresIn: process.env.EXPIRE,
          issuer: process.env.ISSUER,
        };
        jwt.sign(payload, process.env.SECRET_KEY, options, (err, token) => {
        //   if () return reject({ msg: err, status: 500 });
          return resolve({ token, nik });
        });
        
        // resolve(isPasswordValid);
        // resolve(result, );
      });
    });
  });
};

module.exports = {
    login,
    register,
};