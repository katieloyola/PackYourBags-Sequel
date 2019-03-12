//create routes file
var express = require('express');
var router = express.Router();
var db = require("../models");

router.get('/', function (req, res) {
    //promise = .then
    db.Backpack.findAll().then(function (dbBackpack) {
        var hbsObject = {
            backpack_data: dbBackpack
        }
        //index =index.handlebars
        res.render("index", hbsObject)
    })
})

router.put('/backpacks/update', function (req, res) {
    db.Backpack.update({
        packed: true
    },{
            where: {
                id: req.body.backpack_id
            }
    });
    res.redirect('/');
});

router.post('/backpacks/create', function (req, res) {
    db.Backpack.create({
        backpack_item: req.body.backpack_item,
        packed: false
    });
    res.redirect('/');
})
module.exports = router;