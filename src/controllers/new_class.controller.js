'use strict';
const mysql = require("mysql");
const newClass = require('../models/new_class.model');
exports.findAll = function (req, res) {
    newClass.findAll(function (err, new_class) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', new_class);
        res.send({ result: new_class });
    }
    );
};


// const findall = (param)=>{}

exports.create = function (req, res) {
    const newClasses = new newClass(req.body);
    //handles null error
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    }
    else {
        newClass.create(newClasses, function (err, new_class) {
            if (err)
                res.send(err);
            res.json({ error: false, message: "class added successfully!", data: new_class }
            );
        });
    }
};

exports.getdata = function (req, res) {
    const { sort, search } = req.query
    const searchValue = "%" + search + "%";
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

    const qsValue = [searchValue, ...sortValue]
    console.log(qsValue)
    //newClass.findBySearch(qsValue, (result, err) {
    newClass.findBySearch(qsValue)
        .then(res => { res.send(res.json); })
        .catch(err => { res.send(err); })

    exports.findBypilih = function (req, res) {
        switch (req.params.pilih) {
            case "id": return newClass.findByid(req.params.value, function (err, new_class) {
                if (err)
                    res.send(err);
                res.json(new_class);
            });
            case "category": return newClass.findBycategory(req.params.value, function (err, new_class) {
                if (err)
                    res.send(err);
                res.json(new_class);
            });
            case "level": return newClass.findBylevel(req.params.value, function (err, new_class) {
                if (err)
                    res.send(err);
                res.json(new_class);
            });
            case "pricing": return newClass.findBypricing(req.params.value, function (err, new_class) {
                if (err)
                    res.send(err);
                res.json(new_class);
            });
        }
    }

    exports.sortBykolom = function (req, res) {
        switch (req.params.kolom) {
            case "level": return newClass.sortBylevelAS(req.params.value, function (err, new_class) {
                if (err)
                    res.send(err);
                res.json(new_class);
            });
            case "level": return newClass.sortBylevelDESC(req.params.value, function (err, new_class) {
                if (err)
                    res.send(err);
                res.json(new_class);
            });
            case "category": return newClass.sortBycategoryASC(req.params.value, function (err, new_class) {
                if (err)
                    res.send(err);
                res.json(new_class);
            });
            case "category": return newClass.sortBycategoryDESC(req.params.value, function (err, new_class) {
                if (err)
                    res.send(err);
                res.json(new_class);
            });
            case "pricing": return newClass.sortBypricingASC(req.params.value, function (err, new_class) {
                if (err)
                    res.send(err);
                res.json(new_class);
            });
            case "pricing": return newClass.sortBypricingDESC(req.params.value, function (err, new_class) {
                if (err)
                    res.send(err);
                res.json(new_class);
            });
        }
    }

    // exports.findBycategory = function(req, res) {
    //     newClass.findBycategory(req.params.pilih, function(err, new_class) {  
    //         if (err)  
    //         res.send(err);  
    //         res.json(new_class);
    //     });
    // };

    // exports.findBylevel = function(req, res) {
    //     newClass.findBylevel(req.params.pilih, function(err, new_class) {  
    //         if (err)  
    //         res.send(err);  
    //         res.json(new_class);
    //         console.log(new_class);
    //     });
    // };

    // exports.findBypricing = function(req, res) {
    //     newClass.findBypricing(req.params.pilih, function(err, new_class) {  
    //         if (err)  
    //         res.send(err);  
    //         res.json(new_class);
    //     });
    // };

    exports.update = function (req, res) {
        if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
            res.status(400).send({ error: true, message: 'Please provide all required field' });
        }
        else {
            newClass.update(req.params.id, new newClass(req.body), function (err, new_class) {
                if (err)
                    res.send(err);
                res.json({ error: false, message: 'Class successfully updated' });
            });
        }
    };

    exports.delete = function (req, res) {
        newClass.delete(req.params.id, function (err, new_class) {
            if (err)
                res.send(err);
            res.json({ error: false, message: 'Employee successfully deleted' });
        });
    }
};