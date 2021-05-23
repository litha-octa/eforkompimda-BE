const dbConn = require('./../../config/db.config');

const UserClass = function (user_class) {
    this.user_id = user_class.user_id;
    this.class_id = user_class.class_id;
};

UserClass.findClassByUser = function (result) {
    dbConn.query("SELECT user.name AS 'user', GROUP_CONCAT(all_class.class_name SEPARATOR ", ")  AS 'class' FROM user_class INNER JOIN user on user_class.user_id = user.user_id INNER JOIN all_class on all_class.class_id = user_class.class_id", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('Result : ', res);
            result(null, res);
        }
    });
};
UserClass.findUsersByClass = function (result) {
    dbConn.query("SELECT all_class.class_name AS 'Class', user.name  AS 'Member'  FROM user_class  INNER JOIN user on user_class.user_id = user.user_id INNER JOIN all_class on all_class.class_id = user_class.class_id", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('Result : ', res);
            result(null, res);
        }
    });
};

module.exports = UserClass;