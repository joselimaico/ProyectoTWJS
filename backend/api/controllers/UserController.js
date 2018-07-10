/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
//const User = require('../models/user')
const jwt = require('jsonwebtoken')
module.exports = {

 hello: async function (req, res) {
    return res.send('Hi there!');
  },

  signup: async (req, res) => {
    let params = req.allParams()
    let created = await User.create({email: params.email, username: params.username, password: params.password}).fetch()
    let payload = {subject:created._id}
    let token=jwt.sign(payload,'secretKey')
    return res.json({token})

  },
  login:(req,res)=>{
    let userData=req.body
    User.findOne({email:userData.email},(error,user)=>{
      if(error){
        console.log(error)
      }else {
        if(!user){
          res.status(401).send('Invalid email')
        } else
          if(user.password !== userData.password) {
            res.status(401).send('Invalid password')
          }else{
          let payload = {subject:user._id}
          let token = jwt.sign(payload, 'secretKey')
          res.status(200).send({token})
          }
      }
    })
  }


};

