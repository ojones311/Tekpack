var express = require('express');
var router = express.Router();
const projects = require('../models/Projects')

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
    const { users_id } = req.params
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
    const { projects_id } = req.params
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
    try {
        const newProject = await projects.createNewProject(req.body)
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

router.delete('')


module.exports = router;