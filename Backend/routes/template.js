var express = require('express')
var router = express.Router();
const temp = require('../models/Template')

// router.get('/all', async (req, res, next) => {
//     const {template_id} = req.params
//     try {
//         const template = await temp.getAll()
//         res.json({
//             payload: template,
//             msg: "Success",
//             error: false
//         })
//     } catch (error) {
//         console.log(error)
//         res.status(500).json({
//             payload: null,
//             msg: error,
//             err: true
//         })
//     }
// })

router.get('/:template_id', async (req, res, next) => {
    const { template_id } = req.params
    try {
        const template = await temp.getTemplateById(template_id)
        res.json({
            payload: template,
            msg: "Success",
            error: false
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



router.post('/', async (req, res, next) => {
    console.log(req.body)
    const { image, img_name } = req.body

    try {
        const addTemp = await temp.addNewTemplate(image, img_name)
        res.json({
            payload: addTemp,
            msg: "Template added",
            error: false
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



module.exports = router;