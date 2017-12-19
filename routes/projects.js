const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Project = require('../models/project');

router.post('/saveProject', function (req, res, next) {
    var newProject = new Project({
        name: req.body.name,
        goal: req.body.goal,
        description: req.body.description,
        duration: req.body.duration,
        timeCompleted: req.body.timeCompleted,
        isConfirmed: req.body.isConfirmed,
        isActive: req.body.isActive,
        createdDate: req.body.createdDate,
        strategy: req.body.strategy,
        user: req.body.user
    });

    Project.addProject(newProject, function (err, project) {
        if (err) {
            res.json({success: false, msg: 'Failed to create a project'})
        } else {
            res.json({success: true, msg: 'Project created'})

        }
    });
});

router.post('/getProjectsByUserId', function (req, res, next) {
    var user = req.body.user;

    Project.getProjectByUserId(user, function (err, projects) {
        if (err) {
            res.json({success: false, msg: 'Failed to get projects'})
        } else {
            res.json({
                success: true,
                projects: projects
            });
        }
    })
});

router.post('/deleteProject', function (req, res, next) {
    var project = req.body.project;

    Project.deleteProject(project, function (err, deleted) {
        if (err) {
            res.json({success: false, msg: 'Failed to delete project'})
        } else {
            console.log(deleted);
            res.json({success: true, msg: 'Project was deleted'})
        }
    })
});

router.post('/changeStatus', function (req, res, next) {
    var projectChanger = [req.body.project, req.body.changeTo];
    var changedTo = req.body.changeTo;

    Project.changeStatus(projectChanger, function (err, changed) {
        if (err) {
            res.json({success: false, msg: 'Failed to change the status of the project'})
        }
        if (changed) {
            res.json({success: true, msg: 'Status was changed'})
            if (changedTo) {

            }
        }

    })
});

router.post('/changeProjectStatusAndSetTime', function (req, res, next) {
    var projectChanger = [req.body.project._id, req.body.changeTo];
    var changedTo = req.body.changeTo;
    var projectId = req.body.project._id;

    Project.changeStatus(projectChanger, function (err, changed) {
        if (err) {
            res.json({success: false, msg: 'Failed to change the status of the project'})
        }

        var schedule = require('node-schedule');
        var j = schedule.scheduleJob('0 0 */1 * *', function () {
            Project.getProjectById(projectId, function (err, project) {
                if (err) {
                    return new Error(err);
                }
                var currentProject = project;
                if (currentProject.isActive) {
                    writeCompletedTime(currentProject);
                    console.log('We have written the completed time to ' + currentProject.name);
                } else {
                    j.cancelJob();
                    console.log('We stopped to write the time to ' + currentProject.name);
                }
            });
        });
        res.json({success: true, msg: 'Status was changed'})
    })
});

function writeCompletedTime(project) {
    var currentCompletedTime = parseInt(project.timeCompleted);
    var newCompletedTime = (currentCompletedTime + 1).toString();

    var projectChanger = [project, newCompletedTime];
    Project.writeCompletedTime(projectChanger);
}

module.exports = router;