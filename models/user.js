const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');
//const module = require('module');


//Users Schema
const UserSchema = mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        required:true
    }
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function (id,callback) {
    User.findById(id,callback);
};

module.exports.getUserByUsername = function (username, callback) {
    const query = {username:username};
    User.findOne(query,callback);
};

module.exports.addUser = function (newUser,callback) {
  bcrypt.genSalt(10,function (err,salt) {
     bcrypt.hash(newUser.password,salt,function (error,hash) {
         if(error) throw error;
         newUser.password = hash;
         newUser.save(callback);
     });
  });
};

module.exports.comparePassword = function(candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword, hash, function(err, isMatch){
        if(err) throw err;
        callback(null, isMatch);
    });
};

module.exports.getAllUsers = function (user, callback) {
    mongoClient.connect(URL, function(err, db) {
        if (err) throw err;
        db.collection('users',function(err,collection){
            collection.find({}, function(err, cursor){
                cursor.toArray(callback);
                db.close();
            });
        })
    });
};
