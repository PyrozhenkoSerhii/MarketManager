const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Strategy = require('../models/strategy');

//save
router.post('/saveStrategy',function(req,res,next){
    var newStrategy = new Strategy({
        name:req.body.name,
        description:req.body.description,
        duration:req.body.duration,
        timeCompleted:req.body.timeCompleted,
        trackingPoint:req.body.trackingPoint,
        initialData:req.body.initialData,
        progress:req.body.progress,
        iotTech:req.body.iotTech,
        type:req.body.type,
        parameters:req.body.parameters,
        isActive:req.body.isActive,
        createdDate:req.body.createdDate,
        project:req.body.project,
        user:req.body.user
    });

    console.log(newStrategy);
    Strategy.addStrategy(newStrategy,function (err, strategy) {
        if(err){
            res.json({success:false,msg:'Failed to create a strategy'})
        }else{
            res.json({success:true,msg:'Strategy created'})
        }
    });
});


router.post('/getStrategiesByUserId',function (req,res,next) {
    var user = req.body.user;

    Strategy.getStrategyByUserId(user,function (err,strategies) {
        if(err){
            res.json({success:false,msg:'Failed to get strategies'})
        }else{
            res.json({
                success:true,
                strategies: strategies
            });
        }
    })
});

router.post('/getStrategiesByProjectId',function (req,res,next) {
    var project = req.body.project;

    Strategy.getStrategyByProjectId(project,function (err,strategies) {
        if(err){
            res.json({success:false,msg:'Failed to get strategies'})
        }else{
            res.json({
                success:true,
                strategies: strategies
            });
        }
    })
});

router.post('/getStrategyById',function (req,res,next) {
    var id = req.body.id;

    Strategy.getStrategyById(id,function (err,strategy) {
        if(err){
            res.json({success:false,msg:'Failed to get strategy'})
        }else{
            res.json({
                success:true,
                strategies: strategy
            });
        }
    })
});

router.post('/deleteStrategy',function (req,res,next) {
    var strategy = req.body.strategy;

    Strategy.deleteStrategy(strategy,function (err,deleted) {
        if(err){
            res.json({success:false,msg:'Failed to delete strategy'})
        }else{
            res.json({success:true,msg:'Strategy was deleted'})
        }
    })
});

router.post('/changeStatus', function (req, res, next) {
    var strategyChanger = [req.body.strategy, req.body.changeTo];

    Strategy.changeStatus(strategyChanger, function (err, changed) {
        if (err) {
            res.json({success: false, msg: 'Failed to change the status of the strategy'})
        } else {
            res.json({success: true, msg: 'Status was changed'})
        }
    })
});

router.post('/changeProgress', function (req, res, next) {
    var strategyChanger = [req.body.strategy, req.body.progress];

    Strategy.changeProgress(strategyChanger, function (err, changed) {
        if (err) {
            res.json({success: false, msg: 'Failed to change the progress of the strategy'})
        } else {
            res.json({success: true, msg: 'Progress was changed'})
        }
    })
});


module.exports = router;
