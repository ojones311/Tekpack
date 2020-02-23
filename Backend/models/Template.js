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
        await db.mone(`INSERT INTO template(image, img_name) VALUES($1, $2)`)
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
