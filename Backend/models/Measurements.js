const db = require('../database/index')

getAllMeasurementsByProjectId = async (id) => {
    try{
        const myMeasurements = await db.any(`SELECT * FROM measurement WHERE projects_id = $1`, [id])
        return myMeasurements
    }catch(error){
        console.log('mod error', error)
    }
}

postNewMeasurements = async (newMeasurements) => {
    const {projects_id} = newMeasurements
    try{
       existingMeasurementObject = await db.any('SELECT * FROM measurements WHERE projects_id= $1', [projects_id]) 
       if(existingMeasurementObject){
            await db.one('DELETE FROM measurements WHERE projects_id= $1', projects_id)
       }
       const insertQuery = 'INSERT INTO measurements(hps, cf, cb, ss, projects_id)'
       newMeasurementObject = await db.one(insertQuery, {
            hps: newMeasurements.hps,
            cf: newMeasurements.cps,
            cb: newMeasurements.cb,
            ss: newMeasurements.ss,
            projects_id: newMeasurements.projects_id,
            // stringData: newMeasurements.stringData    
       })
    }catch(error){
        console.log('mod error', error)
    }
}






module.exports = {
    getAllMeasurementsByProjectId,
    postNewMeasurements
}