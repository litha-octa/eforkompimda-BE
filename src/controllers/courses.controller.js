'use strict';
const myCourses = require('../models/courses.model');
exports.findAll = function (req, res) {
    myCourses.findAll(function (err, courses) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', courses);
        res.send({ result: courses });
    }
    );
};

// const findall = (param)=>{}

// exports.create = function (req, res) {
//     const newClasses = new newClass(req.body);
//     //handles null error
//     if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
//         res.status(400).send({ error: true, message: 'Please provide all required field' });
//     }
//     else {
//         newClass.create(newClasses, function (err, new_class) {
//             if (err)
//                 res.send(err);
//             res.json({ error: false, message: "class added successfully!", data: new_class }
//             );
//         });
//     }
// };

exports.findBycolumn = function (req, res) {
    switch (req.params.column) {
        case "id": return myCourses.findByid(req.params.value, function (err, courses) {
            if (err)
                res.send(err);
            res.json(courses);
        });
        case "category": return myCourses.findBycategory(req.params.value, function (err, courses) {
            if (err)
                res.send(err);
            res.json(courses);
        });
        case "class_name": return myCourses.findByclass_name(req.params.value, function (err, courses) {
            if (err)
                res.send(err);
            res.json(courses);
        });
        case "status": return myCourses.findBystatus(req.params.value, function (err, courses) {
            if (err)
                res.send(err);
            res.json(courses);
        });
    }
}

exports.update = function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    }
    else {
        myCourses.update(req.params.id, new myCourses(req.body), function (err, courses) {
            if (err)
                res.send(err);
            res.json({ error: false, message: 'Class successfully updated' });
        });
    }
};

exports.delete = function (req, res) {
    myCourses.delete(req.params.id, function (err, courses) {
        if (err)
            res.send(err);
        res.json({ error: false, message: 'Employee successfully deleted' });
    });
};