var express = require('express');
var router = express.Router();
const Projects = require('../models/Projects')



router.get('/', (req, res, next) => {
    res.send('Route working')
})

router.get('/all', async (req,res,next) => {
    try {
        const allProjects = Projects.getAllProjects()
        res.json({
            payload: allProjects,
            msg: 'Retrieving all projects',
            err: false
        })
    }catch(error){
        res.status(500).json({
            payload:null,
            msg:error,
            err: true
          })
    }
})




module.exports = router 