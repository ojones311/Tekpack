const db = require('../database/index.js')


getDefaultTemplates = async () => {
    try{
        const default_templates = await db.any('SELECT * FROM defaultTemplates')
        return default_templates
    }catch(error){
        console.log('error', error)
    }
}

module.exports = {getDefaultTemplates}