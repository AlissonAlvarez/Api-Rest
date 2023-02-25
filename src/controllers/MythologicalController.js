const Mythologicals = require("../models/MythologicalModel")

exports.getMythological = ((req, res) => {
    Mythologicals.find((err, docs) => {
        if(err) throw new Error(err);
        res.json(docs);
    });
});

exports.readMythological = ((req, res) => {
    Mythologicals.find({_id:req.params._id}, function(docs, err){
        if(!err){
            res.send(docs);
        } else {
            res.send(err);
        }
    })
});

exports.createMythological = ((req, res) => {
    Mythologicals.create(req.body, function(docs, err){
        if(!err){
            res.send(docs);
        } else {
            res.send(err);
        }
    })
});

exports.updateMythological = ((req, res) => {
    Mythologicals.updateOne({_id:req.params._id},{
        image: req.body.image,
        name: req.body.name,
        category: req.body.category,
        description: req.body.description
    }, (err) => {
        if(!err){
            res.send('Character Update');
        } else {
            res.send(err);
        }
    })
});

exports.deleteMythological = ((req, res) => {
    Mythologicals.deleteOne({_id:req.params._id}, function(docs, err){
        if(!err){
            res.send(docs);
        } else {
            res.send(err);
        }
    })
});
