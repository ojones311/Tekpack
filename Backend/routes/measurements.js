var express = require('express');
var router = express.Router();
const Measurements = require('../models/Measurements')

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/project/:project_id', async(req, res, next) => {
    const {project_id} = req.params
    try{
        const allMeasurementsByProjectId = await Measurements.getAllMeasurementsByProjectId(project_id)
        res.json({
            payload: allMeasurementsByProjectId,
            msg: 'Getting all measurements by project id',
            err: false
        })
    }catch(error){
        console.log('mod error', error)
            res.status(500).json({
                payload: null,
                msg: error,
                err: true
        })
    }
})
//For this route we should create the measurment without the formData
//We should add the formData on patch requests to the projects table 
//Measurements table shouldnt stringify itself
router.post('/form', async (req, res, next) => {
    // const formData = {...req.body}
    // delete formData.measurement_id
    // delete formData.projects_id

    // const stringData = JSON.stringify(formData)

    // 3 things measureid, projectsid, stringdata

    const { hps, cf, cb, ss, projects_id} = req.body
    try{
        const measurements = {
            hps,
            cf,
            cb, 
            ss, 
            projects_id, 
            // stringData
        }
        const newMeasurements = await Measurements.postNewMeasurements(measurements)
        res.json({
            payload:newMeasurements,
            msg: 'Posted new measurements',
            err: false
        })
    }catch(error){
        console.log('rt error', error)
        res.json({
            msg: 'Measurements couldnt post',
            err: true
        })
    }
    
})

router.put('edit/measurement', async(req,res,next) => {
    // const {}
})

module.exports = router