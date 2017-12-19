const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Strategy = require('../models/strategy');

var isActive = false;

router.post('/saveStrategy', function (req, res, next) {
    var newStrategy = new Strategy({
        name: req.body.name,
        description: req.body.description,
        duration: req.body.duration,
        timeCompleted: req.body.timeCompleted,
        trackingPoint: req.body.trackingPoint,
        initialData: req.body.initialData,
        progress: req.body.progress,
        iotTech: req.body.iotTech,
        type: req.body.type,
        parameters: req.body.parameters,
        isActive: req.body.isActive,
        createdDate: req.body.createdDate,
        project: req.body.project,
        user: req.body.user
    });

    console.log(newStrategy);
    Strategy.addStrategy(newStrategy, function (err, strategy) {
        if (err) {
            res.json({success: false, msg: 'Failed to create a strategy'})
        } else {
            res.json({success: true, msg: 'Strategy created'})
        }
    });
});

router.post('/getStrategiesByUserId', function (req, res, next) {
    var user = req.body.user;

    Strategy.getStrategyByUserId(user, function (err, strategies) {
        if (err) {
            res.json({success: false, msg: 'Failed to get strategies'})
        } else {
            res.json({
                success: true,
                strategies: strategies
            });
        }
    })
});

router.post('/getStrategiesByProjectId', function (req, res, next) {
    var project = req.body.project;

    Strategy.getStrategyByProjectId(project, function (err, strategies) {
        if (err) {
            res.json({success: false, msg: 'Failed to get strategies'})
        } else {
            res.json({
                success: true,
                strategies: strategies
            });
        }
    })
});

router.post('/getStrategyById', function (req, res, next) {
    var id = req.body.id;

    Strategy.getStrategyById(id, function (err, strategy) {
        if (err) {
            res.json({success: false, msg: 'Failed to get strategy'})
        } else {
            res.json({
                success: true,
                _id: strategy.id,
                name: strategy.name,
                description: strategy.description,
                duration: strategy.duration,
                timeCompleted: strategy.timeCompleted,
                trackingPoint: strategy.trackingPoint,
                initialData: strategy.initialData,
                progress: strategy.progress,
                iotTech: strategy.iotTech,
                type: strategy.type,
                parameters: strategy.parameters,
                isActive: strategy.isActive,
                createdDate: strategy.createdDate,
                project: strategy.project,
                user: strategy.user
            });
        }
    })
});

router.post('/deleteStrategy', function (req, res, next) {
    var strategy = req.body.strategy;

    Strategy.deleteStrategy(strategy, function (err, deleted) {
        if (err) {
            res.json({success: false, msg: 'Failed to delete strategy'})
        } else {
            res.json({success: true, msg: 'Strategy was deleted'})
        }
    })
});

router.post('/changeStatus', function (req, res, next) {
    var strategyChanger = [req.body.strategy, req.body.changeTo];
    var changedTo = req.body.changeTo;
    var strategy = req.body.strategy;

    Strategy.changeStatus(strategyChanger, function (err, changed) {
        if (err) {
            res.json({success: false, msg: 'Failed to change the status of the strategy'})
        }
        if (changed) {
            res.json({success: true, msg: 'Status was changed'});
        }
    })
});

router.post('/changeStatusAndSetProgress', function (req, res, next) {
    var strategyChanger = [req.body.strategy._id, req.body.changeTo];
    var changedTo = req.body.changeTo;
    var strategyId = req.body.strategy._id;

    Strategy.changeStatus(strategyChanger, function (err, changed) {
        if (err) {
            res.json({success: false, msg: 'Failed to change the status of the strategy'})
        }

        var schedule = require('node-schedule');
        var j = schedule.scheduleJob('* */1 * * *', function () {
            Strategy.getStrategyById(strategyId, function (err, strategy) {
                if (err) {
                    return new Error(err);
                }
                var currentStrategy = strategy;
                if (currentStrategy.isActive) {
                    writeProgress(currentStrategy);
                    writeCompletedTime(currentStrategy);
                    console.log('We have written the process and completed time to ' + currentStrategy.name);
                } else {
                    j.cancelJob();
                    console.log('We stopped to write the progress to ' + currentStrategy.name);
                }
            });
        });
        res.json({success: true, msg: 'Status was changed'});
    });
});

router.post('/changeProgress', function (req, res, next) {
    var strategyChanger = [req.body.strategy, req.body.progress];

    Strategy.changeProgress(strategyChanger, function (err, changed) {
        if (err) {
            res.json({success: false, msg: 'Failed to change the progress of the strategy'})
        }

        if (changed) {
            res.json({success: true, msg: 'Failed to change the progress of the strategy'})

        }

    })
});

function writeProgress(strategy) {
    var date = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
    var testValue = +strategy.initialData + 50 + Math.floor(Math.random() * (100 - 10)) + "";
    var testName = date + "";
    strategy.progress[testName.toString()] = testValue;

    var strategyChanger = [strategy, strategy.progress];
    Strategy.writeProgress(strategyChanger);
}

function writeCompletedTime(strategy) {
    var currentCompletedTime = parseInt(strategy.timeCompleted);
    var newCompletedTime = (currentCompletedTime + 1).toString();

    var strategyChanger = [strategy, newCompletedTime];
    Strategy.writeCompletedTime(strategyChanger);
}

module.exports = router;
