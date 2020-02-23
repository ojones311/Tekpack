const db = require('../db/index.js')


getTemplateById = async (template_id) => {
    try {
        const temp = await db.one(`SELECT * from template WHERE template_id =$/template_id/`, [template_id])
        return temp
    }catch(error){
        res.status(500).json({
            payload:null,
            msg:error,
            err: true
          })
    }
}


addNewTemplate = async () => {
    try{
        let image = `${req.params.image}`
        let image_name = `${req.params.img_name}`
        let insertQuery = `INSERT INTO template(image, img_name) 
        VALUES($1, $2)`
        let response = await db.none(insertQuery, [image, image_name])
        res.json({
            status: "success",
            message: "template posted"
        });
    }catch(error){
        res.status(500).json({
            payload:null,
            msg:error,
            err: true
          })
    }
}

// changeTemplate = async () => {

// }

module.exports = {
getTemplateById,
addNewTemplate
}