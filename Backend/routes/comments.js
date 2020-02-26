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

router.get('/project/:projects_id', async (req, res, next) => {
    const {projects_id} = req.params
    try{
        const commentByProjid = await comment.getCommentsByProjectID(projects_id)
        res.json({
            payload: commentByProjid,
            msg: "Success",
            error: false
        })
    }catch (error) {
        console.log(error)
        res.status(500).json({
            payload: null,
            msg: error,
            err: true
        })
    }
    })

    router.get('/comment/:commentors_email', async (req, res, next) => {
        
    })


router.post('/:projects_id', async (req, res, next) => {
    const {comment, commentors_email} = req.body
    console.log(req.body)
    try{
        const addComment = await comment.addNewComment(comment, commentors_email)
        res.json({
            payload: addComment,
            msg: "comment added",
            error: false
        })
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

