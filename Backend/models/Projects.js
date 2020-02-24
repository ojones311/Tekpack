const db = require('../database/index')

getAllProjects = async () => {
    try{
        const allProjects = await db.any('SELECT * FROM projects')
        return allProjects
    }catch(error){
        console.log('mod error', error)
    }
}
getAllProjectsByUserId = async(userId) => {
    try{
        const myProjectsByUserId = await db.any('SELECT * FROM projects WHERE users_id= $/userId/', {userId})
        return myProjectsByUserId
    }catch(error){
        console.log('mod error', error)
    }
}

getProjectByProjectId = async (projectId) => {
    try{
        const myProject = await db.one('SELECT * FROM projects WHERE product_id= $/projectId/', {projectId})
        return myProject
    }catch(error){
        console.log('mod error',error)
    }
}

createNewProject = async () => {
    try{
        await db.one('INSERT')
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

    }catch(error){
        console.log('mod error', error)
    }
}

module.exports = {
    getAllProjects,
    getAllProjectsByUserId,
    getProjectByProjectId
}