const dbConn = require("../config/db.config");

const profile = function (user) {
    this.name = user.name;
    this.email = user.email;
    this.password = user.password;
    this.role_id = user.role_id;
    this.pics = user.pics;
};

profile.updateProfile = function (user, result) {
    dbConn.query("UPDATE user SET ? where user_id = ?",
        db.query(sqlQuery, [params, userId], (error, results) => {
            [result, user_id], function (err, res) {
                if (err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else {
                    result(null, res);
                }
            });
};

module.exports = profile;