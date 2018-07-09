/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


module.exports = {

  register:(req,res)=>{
    let username=req.body.username
    let password = req.body.password
    User.create({username: username, password:password}).exec((error)=>{
      if(error){
        res.send(500,{error:'Error'})
      }

      }

    )
  }

};

