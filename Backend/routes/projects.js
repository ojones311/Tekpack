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
    console.log("body",req.body)
    if (req.body.data.type === "default") {
        try {
            const query = await default_templates.getDefaultTemplatesById(req.body.data.template_id)
            console.log("query", query)
            req.body.data.form_data = query.measurements
            req.body.data.img_url = query.image
            req.body.data.description = query.img_name
            

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
        const newProject = await projects.createNewProject(req.body.data)
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

router.patch('/update/form/:project_id', async (req, res, next) => {
    console.log(`Patch project form route hit with`, req.body, req.params.project_id)
    try {
        const data = projects.updateProjectFormData(req.body, req.params.project_id)
        res.json({
            payload: data,
            msg: 'Project Updated',
            error: false
        })
    } catch (err) {
        res.status(500).json({
            payload: null,
            msg: err,
            err: true
        })
    }
})

router.patch('/update/img/:project_id', async (req, res, next) => {
    console.log(`Patch project img route hit with`, req.body, req.params.project_id)
    try {
        const data = projects.updateProjectImageUrl(req.body.url, req.params.project_id)
        res.json({
            payload: data,
            msg: 'Project Updated',
            error: false
        })
    } catch (err) {
        res.status(500).json({
            payload: null,
            msg: err,
            err: true
        })
    }
})


module.exports = router;