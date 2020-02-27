const db = require('../database/index')

getAllMeasurements = async () => {
    try{
        const allMeasurements = await db.any('SELECT * FROM measurement')
        return allMeasurements
    }catch(error){
        console.log('mod error', error)
    }
}
getAllMeasurementsByProjectId = async (id) => {
    try{
        const myMeasurements = await db.one(`SELECT * FROM measurement WHERE projects_id = $1`, [id])
        return myMeasurements
    }catch(error){
        console.log('mod error', error)
    }
}

postNewMeasurements = async (newMeasurements) => {
    const {projects_id} = newMeasurements
    console.log(newMeasurements)
    try{
       existingMeasurementObject = await db.any('SELECT * FROM measurement WHERE projects_id= $1', [projects_id]) 
       const insertQuery = 'INSERT INTO measurement(HPS, CF, CB, SS, projects_id) VALUES($/HPS/, $/CF/, $/CB/, $/SS/, $/projects_id/) RETURNING *'

    //    if(existingMeasurementObject !== undefined){
            // await db.one('DELETE FROM measurement WHERE projects_id= $1', projects_id)
    
            changedMeasurementObject = await db.one(insertQuery, {
                HPS: newMeasurements.HPS,
                CF: newMeasurements.CF,
                CB: newMeasurements.CB,
                SS: newMeasurements.SS,
                projects_id: newMeasurements.projects_id,   
            })
            console.log('Replacing form:',changedMeasurementObject)
            return changedMeasurementObject
        // } else{
            // newMeasurementObject = await db.one(insertQuery, {
            //     HPS: newMeasurements.HPS,
            //     CF: newMeasurements.CF,
            //     CB: newMeasurements.CB,
            //     SS: newMeasurements.SS,
            //     projects_id: newMeasurements.projects_id,  
            // })
            // console.log('New measurement form:',newMeasurementObject)
            // return newMeasurementObject
        // }   
    }catch(error){
        console.log('mod error', error)
    }
}






module.exports = {
    getAllMeasurements,
    getAllMeasurementsByProjectId,
    postNewMeasurements
}