const db = require('../database/index.js')

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
        const myProjectsByUserId = await db.any('SELECT * FROM projects WHERE users_id= $1', [users_id])
        return myProjectsByUserId
    }catch(error){
        console.log('mod error', error)
    }
}

getProjectByProjectId = async(projects_id) => {
    console.log(`MODEL: `, projects_id)
    try{
        const myProject = await db.one('SELECT * FROM projects WHERE projects_id = $1', [projects_id])
        return myProject
    }catch(error){
        console.log('mod error',error)
    }
}

createNewProject = async(proj) => {
    const {description,  img_url, users_id, form_data} = proj
    try{
        const insertQuery = `INSERT INTO projects (description, img_url, users_id, form_data) 
        VALUES ($1, $2, $3, $4) RETURNING *`
        let response = await db.any(insertQuery, [description, img_url, users_id, form_data])
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
deleteProject = async (project_id) => {
    try{
        let delQuery = 
        `DELETE from projects 
        WHERE projects_id = $1`
        await db.none(delQuery, [project_id])
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