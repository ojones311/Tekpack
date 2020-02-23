var express = require('express');
var router = express.Router();
const User = require('../models/User')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:id', async (req,res,next) => {
  const {id} = req.params
    try{
      const user = await User.getUserById(id)
      res.json({
        payload: user,
        msg: 'Retrieving user by id',
        error: false
      })
    }catch(error){
      res.status(500).json({
          payload:null,
          msg:error,
          err: true
        })
  }
})
module.exports = router;
