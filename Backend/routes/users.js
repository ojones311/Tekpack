var express = require('express');
var router = express.Router();
const User = require('../models/User')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/user/:id', async (req,res,next) => {
    try{
      const user = await User.getUserById()
      res.json({
        payload: user,
        msg: 'Retrieving user by id',
        error: false
      })
    }catch(error){
      console.log('rt error', error)
      res.json({
        msg: 'Error retrieving user',
        err: true
      })
    }
})
module.exports = router;
