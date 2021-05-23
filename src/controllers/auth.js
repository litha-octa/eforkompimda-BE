const { writeResponse, writeError } = require("../helpers/response");
const authModel = require("../models/auth");

const login = (req, res) => {
    authModel
        .login(req.body)
        .then((result) => {
            writeResponse(res, null, 200, { token: result });
        })
        .catch((err) => {
            writeError(res, err.status, err.msg);
        });
};

// const register = (req, res) => {
//     const data = { ...req.body };
//     authModel
//         .register(data)
//         .then((result) => {
//             if (result) {
//                 writeResponse(res, null, 201, {
//                     success: true,
//                     message: 'Your account has been successfully registered',
//                 });
//             }
//         })
//         .catch((err) => {
//             writeError(res, err.status, {
//                 success: err.success,
//                 conflict: err.conflict,
//                 message: err.msg,
//             });
//         });
// };
const register = (req, res) => {
    authModel
        .register(req.body)
        .then(() => {
            writeResponse(res, null, 201, {
                message: "User has been registered successfully",
            });
        })
        .catch((err) => {
            writeError(res, 500, err);
        });
};

module.exports = {
    login,
    register,
};