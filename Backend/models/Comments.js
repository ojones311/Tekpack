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
addNewComment = async () => {
    try{
        const insertQuery = `INSERT INTO comments (comment, commentors_name) 
        VALUES($1, $2) RETURNING *`
        let response = await db.any(insertQuery, [comment, commentor_name])
        return response;
    }catch(error){
     console.log(error)
    }
}

module.exports = {
    getCommentsByID,
    addNewComment
}