const db = require('../database/index')

getAllMeasurementsByProjectId = async (id) => {
    try{
        const myMeasurements = await db.any(`SELECT * FROM measurement WHERE projects_id = $1`, [id])
        return myMeasurements
    }catch(error){
        console.log('mod error', error)
    }
}








module.exports = {
    getAllMeasurementsByProjectId
}