const db = require('../database/index.js')


getDefaultTemplates = async () => {
    try {
        const default_templates = await db.any('SELECT * FROM defaultTemplates')
        return default_templates
    } catch (error) {
        console.log('error', error)
    }
}

getDefaultTemplatesById = async (deftemplate_id) => {
    try {
        const byID = await db.one(`SELECT * FROM defaultTemplates WHERE deftemplate_id = ${$1}`, [deftemplate_id])
        return byID
    } catch (error) {
        console.log('error', error)
    }
}

module.exports = {
    getDefaultTemplates,
    getDefaultTemplatesById
}