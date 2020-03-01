const db = require('../database/index')

getAllMeasurements = async () => {
    try {
        const allMeasurements = await db.any('SELECT * FROM measurement')
        return allMeasurements
    } catch (error) {
        console.log('mod error', error)
    }
}
getAllMeasurementsByProjectId = async (id) => {
    try {
        // const myMeasurements = await db.one(`SELECT * FROM measurement WHERE projects_id = $1`, [id])
        const myMeasurements = await db.one(`SELECT * FROM projects WHERE projects_id = $1`, [id])
        return myMeasurements
    } catch (error) {
        console.log('mod error', error)
    }
}
deleteMeasurementByProjectId = async (project_id) => {
    try {
        const deleteQuery = 'DELETE FROM measurement WHERE projects_id= $1 RETURNING *'
        const deleteMeasurement = await db.one(deleteQuery, [project_id])
        return deleteMeasurement
    } catch (error) {
        console.log('mod error', error)
    }
}
postNewMeasurements = async (newMeasurements) => {
    const { projects_id } = newMeasurements
    console.log('new Measurements', newMeasurements)
    try {
        existingMeasurementObject = await db.any('SELECT * FROM measurement WHERE projects_id= $1', [projects_id])
        const insertQuery = 'INSERT INTO measurement(HPS, CF, CB, SS, projects_id) VALUES($/HPS/, $/CF/, $/CB/, $/SS/, $/projects_id/) RETURNING *'


        let keysLength = Object.keys(existingMeasurementObject).length
        console.log('existingMObj:', existingMeasurementObject)
        console.log('keysLength', keysLength)

        if (keysLength === 0) {
            newMeasurementObject = await db.one(insertQuery, {
                HPS: newMeasurements.HPS,
                CF: newMeasurements.CF,
                CB: newMeasurements.CB,
                SS: newMeasurements.SS,
                projects_id: newMeasurements.projects_id,
            })
            console.log('newMeasObj:', newMeasurementObject)
            return newMeasurementObject
        } else if (keysLength > 0) {
            deleteMeasurementByProjectId(projects_id)
            newMeasurementObject = await db.one(insertQuery, {
                HPS: newMeasurements.HPS,
                CF: newMeasurements.CF,
                CB: newMeasurements.CB,
                SS: newMeasurements.SS,
                projects_id: newMeasurements.projects_id,
            })
            console.log('newMeasObj:', newMeasurementObject)
            return newMeasurementObject
        }
        console.log('Replacing form:', newMeasurementObject)
    } catch (error) {
        console.log('mod error', error)
    }
}






module.exports = {
    getAllMeasurements,
    getAllMeasurementsByProjectId,
    deleteMeasurementByProjectId,
    postNewMeasurements
}