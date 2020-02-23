var express = require('express')
var router = express.Router();
const comment = require('../models/Comments')


router.get('/:comment_id', async (req, res, next) => {
    const {comment_id} = req.params
    try {
        const gotComments = await comment.getCommentsByID(comment_id)
        res.json({
            payload: gotComments,
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

router.post('/:project_id', async (req, res, next) => {
    try{

    }catch (error) {
        console.log(error)
        res.status(500).json({
            payload: null,
            msg: error,
            err: true
        })
    }
})

module.exports = router;