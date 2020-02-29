var express = require('express');
var router = express.Router();
const projects = require('../models/Projects')
const Measurements = require('../models/Measurements')
const default_templates = require('../models/DefaultTemplates')

router.get('/', (req, res, next) => {
    res.send('Route working')
})

router.get('/all', async (req, res, next) => {
    try {
        const allProjects = await projects.getAllProjects()
        res.json({
            payload: allProjects,
            msg: 'Retrieving all projects',
            err: false
        })
    } catch (error) {
        res.status(500).json({
            payload: null,
            msg: error,
            err: true
        })
    }
})

router.get('/user/:users_id', async (req, res, next) => {
    const {
        users_id
    } = req.params
    try {
        let usersProject = await projects.getAllProjectsByUserId(users_id)
        res.json({
            payload: usersProject,
            msg: 'Retrieving users projects',
            err: false
        })
    } catch (error) {
        res.status(500).json({
            payload: null,
            msg: error,
            err: true
        })
    }
})

router.get('/specs/:projects_id', async (req, res, next) => {
    const {
        projects_id
    } = req.params
    console.log(`specific projects: `, projects_id)
    try {
        let projectsById = await projects.getProjectByProjectId(projects_id)
        res.json({
            payload: projectsById,
            msg: 'retrieved project',
            err: false
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            payload: null,
            msg: error,
            err: true
        })
    }
})

router.post('/new', async (req, res, next) => {
    console.log(req.body)
    if (req.body.type === "default") {
        try {
            const query = await default_templates.getDefaultTemplatesById()
            console.log("query", query)
            req.body.form_data = query
        } catch (error) {
            res.status(500).json({
                payload: null,
                msg: error,
                err: true
            })
        }
    } else {
        req.body.form_data = ''
    }
    try {
        const newProject = await projects.createNewProject(req.body)
        console.log("newProject", newProject)
        res.json({
            payload: newProject,
            msg: "project added",
            error: false
        })
    } catch (error) {
        res.status(500).json({
            payload: null,
            msg: error,
            err: true
        })
    }
})

router.delete('/project/:project_id', async (req, res, next) => {
    const {
        project_id
    } = req.params
    try {
        await Measurements.deleteMeasurementByProjectId(project_id)
        const deleteProject = await projects.deleteProject(project_id)
        res.json({
            payload: deleteProject,
            msg: 'project deleted',
            error: false
        })
    } catch (error) {
        res.status(500).json({
            payload: null,
            msg: error,
            err: true
        })
    }
})


module.exports = router;