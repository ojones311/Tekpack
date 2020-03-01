var express = require('express')
var router = express.Router();
const default_templates = require('../models/DefaultTemplates')



router.get('/all', async(req, res, next) => {
    try{
    const allTemps = await default_templates.getDefaultTemplates()
        res.json({
            payload: allTemps,
            msg:'Retrieving all projects',
            err: false
        })
    }catch(error){
        res.status(500).json({
            payload: null,
            msg: error,
            err: true
        })
    }
})

router.get('/default/:deftemplate_id', async (req,res,next) => {
    try{
        const tempsById = await tempsById.getDefaultTemplatesById()
        res.json({
            payload: tempsById,
            msg:'Retrieving all projects by id',
            err: false
        })
    }catch(error){
        res.status(500).json({
            payload: null,
            msg: error,
            err: true
        })
    }
})


module.exports = router;