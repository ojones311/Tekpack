const db = require('../db/index')

getAllProjectsByUserId = async () => {
    try{
        const myProjectsByUserId = await db.any()
    }catch(error){
        console.log('mod error', error)
    }
}

getSingleProjectByUserId = async () => {
    try{
        const mySingleProject = await db.one()
    }
}