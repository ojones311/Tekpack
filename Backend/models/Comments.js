const db = require('../database/index.js')


getCommentsByID = async (comment_id) => {
    try {
        const comment = await db.one(`SELECT * FROM comments WHERE comment_id = $1`, [comment_id])
        return comment
    }catch(error){
        console.log(error)
    }
}
//get comments by project_id
getCommentsByProjectID = async (projects_id) => {
try{
    const comm = await db.any(`SELECT comment, commentors_name FROM comments JOIN projects ON comments.comment_id = projects.projects_id WHERE comments.projects_id = $1`, [projects_id])
    return comm
}catch(error){
    console.log(error)
}
}

addNewComment = async () => {
    try{
        const insertQuery = `INSERT INTO comments (comment, commentors_name) 
        VALUES($1, $2) RETURNING *`
        let response = await db.any(insertQuery, [comment, commentors_name])
        return response;
    }catch(error){
     console.log(error)
    }
}

module.exports = {
    getCommentsByID,
    addNewComment,
    getCommentsByProjectID
}