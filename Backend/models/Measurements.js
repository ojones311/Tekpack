const db = require('../database/index')

getAllMeasurementsByProjectId = async (id) => {
    try{
        const myMeasurements = await db.any(`SELECT * FROM measurement WHERE projects_id = $1`, [id])
        return myMeasurements
    }catch(error){
        console.log('mod error', error)
    }
}

postnewMeasurements = async (newMeasurements) => {
    try{
       existingMeasurementObject = await db.any('SELECT * FROM measurements WHERE projects_id= $1') 
       deleteShow = await db.one
       if(existingMeasurement){
           
       }
    }catch(error){

    }
}






module.exports = {
    getAllMeasurementsByProjectId
}