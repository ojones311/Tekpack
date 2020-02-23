const db = require('../database/index')

getUserById = async (id) => {
    try{
        const myUser = await db.one('SELECT * FROM users WHERE users_id= $/id/', {id})
        return myUser
    }catch(error){
        console.log('mod error', error)
    }
}

getUserByName = async (name) => {
    try{
        const myUser = await db.one('SELECT * FROM users WHERE name= $/name/', {name})
        return myUser
    } catch(error){
        console.log('mod error', error)
    }
}

getAllUsers = async () => {
    try{
        const allUsers = await db.any(`SELECT * FROM users`)
        return allUsers 
    } catch(error){
        console.log('mod error', error)
    }
}
module.exports = {
    getUserById,
    getUserByName,
    getAllUsers
}