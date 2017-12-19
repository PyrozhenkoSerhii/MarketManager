var mongoose = require('mongoose');
var config = require('../config/database');
var mongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

var URL = config.database;

const ProjectSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    goal: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    timeCompleted: {
        type: String,
        required: true
    },
    isConfirmed: {
        type: Boolean
    },
    isActive: {
        type: Boolean
    },
    createdDate: {
        type: Date,
        required: true
    },
    strategy: {
        type: String
    },
    user: {
        type: String,
        required: true
    }
});

const Project = module.exports = mongoose.model('Project', ProjectSchema);

module.exports.getProjectByUserId = function (user, callback) {
    mongoClient.connect(URL, function (err, db) {
        if (err) throw err;
        db.collection('projects', function (err, collection) {
            collection.find({'user': user}, function (err, cursor) {
                cursor.toArray(callback);
                db.close();
            });
        })
    });
};

module.exports.addProject = function (newProject, callback) {
    newProject.save(callback);
};

module.exports.deleteProject = function (project, callback) {
    mongoClient.connect(URL, function (err, db) {
        if (err) throw err;
        var query = {_id: ObjectId(project)};
        db.collection("projects").deleteOne(query, function (err, obj) {
            if (err) throw err;
            callback(null, true);
            db.close();
        });
    });
};

module.exports.changeStatus = function (projectChanger, callback) {
    mongoClient.connect(URL, function (err, db) {
        if (err) throw err;
        var myquery = {_id: ObjectId(projectChanger[0])};
        var newvalues = {$set: {isActive: projectChanger[1]}};

        db.collection("projects").updateOne(myquery, newvalues, function (err, res) {
            if (err) throw err;
            callback(null, true);
            db.close();
        });
    });

};

module.exports.writeCompletedTime = function (projectChanger) {
    mongoClient.connect(URL, function (err, db) {
        if (err) throw err;
        var myquery = {_id: ObjectId(projectChanger[0]._id)};
        var newvalues = {$set: {timeCompleted: projectChanger[1]}};

        db.collection("projects").updateOne(myquery, newvalues, function (err, res) {
            if (err) throw err;
            db.close();
        });
    });
};

module.exports.getProjectById = function (id, callback) {
    Project.findById(id, callback);
    // Strategy.findById(id,function (err,result) {
    //     if(err) throw new Error(err);
    //     callback(null,result);
    // })
};