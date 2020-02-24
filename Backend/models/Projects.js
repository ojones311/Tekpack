const db = require('../database/index')

getAllProjects = async () => {
    try{
        const allProjects = await db.any('SELECT * FROM projects')
        return allProjects
    }catch(error){
        console.log('mod error', error)
    }
}
getAllProjectsByUserId = async(users_id) => {
    try{
        const myProjectsByUserId = await db.any('SELECT * FROM projects WHERE users_id= $/users_id/', {users_id})
        return myProjectsByUserId
    }catch(error){
        console.log('mod error', error)
    }
}

getProjectByProjectId = async (projects_id) => {
    try{
        const myProject = await db.one('SELECT * FROM projects WHERE projects_id= $/projects_id/', {projects_id})
        return myProject
    }catch(error){
        console.log('mod error',error)
    }
}

createNewProject = async () => {
    try{
        const insertQuery = `INSERT INTO projects (description, date_made, created_by, quantity, color, img_url) 
        VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`
        let response = await db.any(insertQuery, [description, date_made, created_by, quantity, color, img_url])
        return response;
    }catch(error){
        console.log('mod error', error)
    }
}

editProject = async () => {
    try{

    }catch(error){
        console.log('mod error', error)
    }
}
deleteProject = async () => {
    try{
        let description = req.params.description
        let date_made = req.params.date_made
        let created_by = req.params.created_by
        let quantity = req.params.quantity
        let color = req.params.color
        let img_url = req.params.img_url

        let delQuery = 
        `DELETE from projects 
        WHERE description = $1 AND date_made = $2 AND created_by = $3 AND quantity = $4 AND color = $5 AND img_url = $6`
        await db.none(delQuery, [description, date_made, created_by, quantity, color, img_url])
    }catch(error){
        console.log('mod error', error)
    }
}

module.exports = {
    getAllProjects,
    getAllProjectsByUserId,
    getProjectByProjectId,
    createNewProject,
    deleteProject
}