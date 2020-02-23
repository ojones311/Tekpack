const db = require('../db/index')

getAllProjectsByUserId = async(userId) => {
    try{
        const myProjectsByUserId = await db.any('SELECT * FROM projects WHERE users_id= $/userId/', [userId])
        return myProjectsByUserId
    }catch(error){
        console.log('mod error', error)
    }
}

getProjectByProjectId = async(projectId) => {
    try{
        const myProject = await db.one('SELECT * FROM projects WHERE product_id= $/')
        return myProject
    }catch(error){
        console.log('mod error',error)
    }
}