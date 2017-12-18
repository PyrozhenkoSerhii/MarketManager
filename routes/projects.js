const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Project = require('../models/project');

//save
router.post('/saveProject', function (req, res, next) {
    // noinspection JSAnnotator
    let newProject = new Project({
        name: req.body.name,
        goal: req.body.goal,
        description: req.body.description,
        duration: req.body.duration,
        timeCompleted:req.body.timeCompleted,
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

    Project.changeStatus(projectChanger, function (err, changed) {
        if (err) {
            res.json({success: false, msg: 'Failed to change the status of the project'})
        }
        if(changed) {
            res.json({success: true, msg: 'Status was changed'})
            console.log('here will be func');
        }

    })
});


module.exports = router;