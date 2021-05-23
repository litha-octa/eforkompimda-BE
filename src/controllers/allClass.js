'use strict';
//const { writeResponse, writeError } = require('../helpers/response');
const mysql = require("mysql");
const newClass = require('../models/allClass');

exports.findAll = function (req, res) {
    newClass.findAll(function (err, all_class) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', all_class);
        res.send({ result: all_class });
    }
    );
};

exports.create = function (req, res) {

    const { files } = req;
    console.log(files)
    const avatar = files.length > 0 ? `/images/${files[0].filename}` : null;
    const img = files.length > 0 ? { ...req.body, avatar } : { ...req.body };
    const newClasses = new newClass(img);
    if (newClasses.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    }
    else {
        newClass.create(newClasses, function (err, all_class) {
            if (err)
                return res.send(err);
            res.json({ error: false, message: "class added successfully!", data: all_class }
            );
        });
    }
};


// exports.create = (req, res) => {
//     const { files } = req;
//     const avatar = files.length > 0 ? `/image/${files[0].filename}` : null;
//     const img = files.length > 0 ? { ...req.body, avatar } : { ...req.body };
//     //const newClasses = new newClass(req.body, img);
//     newClass
//         .create(req.body, img)
//         .then((result) => {
//             writeResponse(res, null, 200, result);
//         })
//         .catch((err) => {
//             writeError(res, err.status, {
//                 success: err.success,
//                 conflict: err.conflict,
//                 message: err.msg,
//             });
//         });
// };


exports.getdata = function (req, res) {
    const { sort, search } = req.query
    let searchValue
    let sortValue
    if (search) {
        searchValue = "%" + search + "%";

    } else {
        searchValue = "%%"
    }
    if (sort) {
        sortValue = sort.split("-").map((el) => {
            switch (el) {
                case "AZ":
                    return mysql.raw("ASC");
                case "ZA":
                    return mysql.raw("DESC");
                default:
                    return mysql.raw(el);
            }
        })
    } else {
        sortValue = [mysql.raw("class_name"), mysql.raw("ASC")]
    }

    // const searchValue = "%" + search + "%";
    // const sortValue = sort.split("-").map((el) => {
    //     switch (el) {
    //         case "AZ":
    //             return mysql.raw("ASC");
    //         case "ZA":
    //             return mysql.raw("DESC");
    //         default:
    //             return mysql.raw(el);
    //     }
    //})
    const qsValue = [searchValue, ...sortValue]
    console.log(qsValue)
    newClass.findBySearch(qsValue)
        .then(result => { res.json(result); })
        .catch(err => { res.send(err); })
};
exports.sortlevel = function (req, res) {
    const { sort } = req.query
    const sortValue = sort.split("-").map((el) => {
        switch (el) {
            case "AZ":
                return mysql.raw("ASC");
            case "ZA":
                return mysql.raw("DESC");
            default:
                return mysql.raw(el);
        }
    })
    const qsValue = [...sortValue]
    newClass.sortlevel(qsValue)
        .then(result => { res.json(result); })
        .catch(err => { res.send(err); })
};
exports.sortcategory = function (req, res) {
    const { sort } = req.query
    const sortValue = sort.split("-").map((el) => {
        switch (el) {
            case "AZ":
                return mysql.raw("ASC");
            case "ZA":
                return mysql.raw("DESC");
            default:
                return mysql.raw(el);
        }
    })
    const qsValue = [...sortValue]
    newClass.sortcategory(qsValue)
        .then(result => { res.json(result); })
        .catch(err => { res.send(err); })
};
exports.sortpricing = function (req, res) {
    const { sort } = req.query
    const sortValue = sort.split("-").map((el) => {
        switch (el) {
            case "AZ":
                return mysql.raw("ASC");
            case "ZA":
                return mysql.raw("DESC");
            default:
                return mysql.raw(el);
        }
    })
    const qsValue = [...sortValue]
    newClass.sortpricing(qsValue)
        .then(result => { res.json(result); })
        .catch(err => { res.send(err); })
    return;
};





exports.findBypilih = function (req, res) {
    switch (req.params.pilih) {
        case "id": return newClass.findByid(req.params.value, function (err, all_class) {
            if (err)
                res.send(err);
            res.json(all_class);
        });
        case "category": return newClass.findBycategory(req.params.value, function (err, all_class) {
            if (err)
                res.send(err);
            res.json(all_class);
        });
        case "level": return newClass.findBylevel(req.params.value, function (err, all_class) {
            if (err)
                res.send(err);
            res.json(all_class);
        });
        case "pricing": return newClass.findBypricing(req.params.value, function (err, all_class) {
            if (err)
                res.send(err);
            res.json(all_class);
        });
    }
};

exports.update = function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    }
    else {
        newClass.update(req.params.id, new newClass(req.body), function (err) {
            if (err)
                res.send(err);
            res.json({ error: false, message: 'Class successfully updated' });
        });
    }
};

exports.delete = function (req, res) {
    newClass.delete(req.params.id, function (err) {
        if (err)
            res.send(err);
        res.json({ error: false, message: 'data successfully deleted' });
    })
};

