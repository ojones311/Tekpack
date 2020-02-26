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
    const comm = await db.any(`SELECT comment, commentors_name
     FROM comments INNER JOIN projects ON comments.projects_id = projects.projects_id 
     WHERE comments.projects_id = $1`, [projects_id])
     console.log(comm)
    return comm
}catch(error){
    console.log(error)
}
}

addNewComment = async (comment, commentors_name) => {
    try{
        const insertQuery = `INSERT INTO comments (comment, commentors_name) 
        VALUES($1, $2) RETURNING *`
        let response = await db.any(insertQuery, [comment, commentors_name])
        console.log(insertQuery)
        return response;
    }catch(error){
     console.log(error)
    }
}

module.exports = {
    getCommentsByID,
    addNewComment,
    getCommentsByProjectID,
}