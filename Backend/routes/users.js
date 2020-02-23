var express = require('express');
var router = express.Router();
const User = require('../models/User')

/* GET users listing. */
router.get('/', function(req, res, next) {


  res.send('respond with a resource');
});

router.get('userid/:id', async (req,res,next) => {
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

//Add a middleware to get rid of spaces and lowercase all chars
router.get('name/:name', async (req, res, next) => {
  const {name} = req.params
  try{
    const user =  await User.getUserByName(name)
    res.json({
      payload: user,
      msg:'Retrieving user by name',
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

router.get('/all', async (req, res, next) => {
  try{
    const users = await User.getAllUsers()
    res.json({
      payload: users,
      msg:'Retrieving all users',
      error: false
    })
  }catch(error){
    console.log('error',error)
    res.status(500).json({
      payload:null,
      msg:error,
      err: true
    })
  }
})

module.exports = router;
