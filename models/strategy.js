var mongoose = require('mongoose');
var config = require('../config/database');
var mongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

var URL = config.database;

const StrategySchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    duration:{
        type:String,
        required:true
    },
    timeCompleted:{
        type:String,
        required:true
    },
    trackingPoint:{
        type:String,
        required:true
    },
    initialData:{
        type:String,
        required:true
    },
    progress:{
        type:Object
    },
    iotTech:{
        type:Object
    },
    type:{
        type:String,
        required:true
    },
    parameters:{
        type:Object
    },
    isActive:{
        type:Boolean
    },
    createdDate:{
        type:Date,
        required:true
    },
    project:{
        type:String,
        required:true
    },
    user:{
        type:String,
        required:true
    }
});

const Strategy = module.exports = mongoose.model('Strategy', StrategySchema);

module.exports.getStrategyByUserId = function (user, callback) {
    mongoClient.connect(URL, function(err, db) {
        if (err) throw err;
        db.collection('strategies',function(err,collection){
            collection.find({'user':user}, function(err, cursor){
                cursor.toArray(callback);
                db.close();
            });
        })
    });
};

module.exports.getStrategyByProjectId = function (project, callback) {
    mongoClient.connect(URL, function(err, db) {
        if (err) throw err;
        db.collection('strategies',function(err,collection){
            collection.find({'project':project}, function(err, cursor){
                cursor.toArray(callback);
                db.close();
            });
        })
    });
};

module.exports.getStrategyById = function (id, callback){
    mongoClient.connect(URL, function(err, db) {
        if (err) throw err;
        db.collection('strategies',function(err,collection){
            collection.findOne({'_id':ObjectId(id)}, function(err, cursor){
                cursor.toArray(callback);
                db.close();
            });
        })
    });
};


module.exports.addStrategy = function (newStrategy,callback) {
//    newStrategy.save(callback);
    mongoClient.connect(URL, function(err, db) {
        if (err) throw err;
        db.collection('strategies').insertOne(newStrategy, function(err, result) {
            console.log("Inserted a document into the strategy collection.");
            callback();
        });

    });
};



module.exports.deleteStrategy = function (strategy,callback) {
    mongoClient.connect(URL, function(err, db) {
        if (err) throw err;
        var query = { _id: ObjectId(strategy) };
        db.collection("strategies").deleteOne(query, function(err, obj) {
            if (err) throw err;
            db.close();
        });
    });
};

module.exports.changeStatus = function (strategyChanger, callback) {
    mongoClient.connect(URL, function(err, db) {
        if (err) throw err;
        var myquery = { _id: ObjectId(strategyChanger[0])};
        var newvalues = {  $set:{isActive:strategyChanger[1]}};

        db.collection("strategies").updateOne(myquery, newvalues, function(err, res) {
            if (err) throw err;
            db.close();
        });
    });
};

module.exports.changeProgress = function (strategyChanger, callback) {
    mongoClient.connect(URL, function(err, db) {
        if (err) throw err;
        var myquery = { _id: ObjectId(strategyChanger[0]._id)};
        var newvalues = {  $set:{progress:strategyChanger[1]}};

        db.collection("strategies").updateOne(myquery, newvalues, function(err, res) {
            if (err) throw err;
            db.close();
        });
    });
};
