const db = require('../db/index.js')


getTemplateByid = async (id) => {
    try {
        const temp = await db.one(`SELECT * from template WHERE id =$/template_id/`, [id])
        return temp
    }catch(error){
        res.status(500).json({
            payload:null,
            msg:error,
            err: true
          })
    }
}

