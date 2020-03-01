const db = require('../database/index.js')


getDefaultTemplates = async () => {
    try {
        const default_templates = await db.any('SELECT * FROM defaultTemplates')
        return default_templates
    } catch (error) {
        console.log('error', error)
    }
}

getDefaultTemplatesById = async (template_id) => {
    console.log(template_id)
    try {
        const byID = await db.one('SELECT * FROM defaultTemplates WHERE template_id = $1', [template_id])
        return byID
    } catch (error) {
        console.log('error', error)
    }
}

module.exports = {
    getDefaultTemplates,
    getDefaultTemplatesById
}