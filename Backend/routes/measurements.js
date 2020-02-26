var express = require('express');
var router = express.Router();
const Measurements = require('../models/Measurements')

router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.get('/project/:project_id', async (req, res, next) => {
    const { project_id } = req.params
    try {
        const allMeasurementsByProjectId = await Measurements.getAllMeasurementsByProjectId(project_id)
        res.json({
            payload: allMeasurementsByProjectId,
            msg: 'Getting all measurements by project id',
            err: false
        })
    } catch (error) {
        console.log('mod error', error)
        res.status(500).json({
            payload: null,
            msg: error,
            err: true
        })
    }
})
router.post('/form', async (req, res, next) => {
    const formData = { ...req.body }
    delete formData.measurement_id
    delete formData.projects_id

    const stringData = JSON.stringify(formData)

    // 3 things measureid, projectsid, stringdata




    const { measurement_id, hps, cf, cb, ss, projects_id } = req.body
    const measurements = {
        measurement_id,
        hps,
        cf,
        cb,
        ss,
        projects_id
    }
    // const newMeasurements = 
})


router.put('edit/measurement', async (req, res, next) => {
    // const {}
})

module.exports = router