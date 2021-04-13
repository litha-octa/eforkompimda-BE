//const dbConn = require('./../../config/db.config');
const userModel = require('../models/profile');
const { writeResponse, writeError } = require('../helpers/response');

exports.updateUserById = (req, res) => {
    const { files } = req;
    const avatar = files.length > 0 ? `/images/${files[0].filename}` : null;
    const data = files.length > 0 ? { ...req.body, avatar } : { ...req.body };
    const user_id = req.params.id;
    userModel
        .updateUserById(data, user_id)
        .then((result) => {
            writeResponse(res, null, 200, result);
        })
        .catch((err) => {
            writeError(res, err.status, {
                success: err.success,
                conflict: err.conflict,
                message: err.msg,
            });
        });
};

//module.exports = updateUserById;