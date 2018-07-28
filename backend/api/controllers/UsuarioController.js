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
    let created = await Usuario.create({email: params.email, username: params.username, password: params.password, imagenUsuario: params.imagenUsuario}).fetch()
    return res.json(created);

    // let payload = {subject:created._id}
    // let token=jwt.sign(payload,'secretKey')
    // return res.json({token})

  },

  updateUsuario: async (req, res) => {
   let Data = req.allParams()
    sails.log('contenido: ',Data);
   await Usuario
     .update(
       {_id:Data.id},
       {
         nombreUsuario: Data.nombreUsuario,
         apellidoUsuario: Data.apellidoUsuario,
         fechaNacimientoUsuario: Data.fechaNacimientoUsuario
       }
       )
     // .fetch();
     .then((error, cambio)=>
         {
            if(error){
              return res.json(500,{error: error});
            }else{
              sails.log('se actualizó el registro!!!, ', cambio);
              return res.json(200, {resultado: cambio})
            }

         });
  },

  eliminateUser: async(req, res) =>{
   Usuario.findByIdAndDelete({_id:req.params.id})
     .then((usuario)=>{
       res.send(usuario)
     })
  },



  login:(req,res)=>{
    let userData=req.body
    Usuario.findOne({email:userData.email},(error,user)=>{
      if(error){
        console.log(error)
      }else {
        if(!user){
          res.status(401).send('Invalid email')
        } else
          if(user.password !== userData.password) {
            res.status(401).send('Invalid password')
          }else{
          // let payload = {subject:user._id}
          // let token = jwt.sign(payload, 'secretKey')
          // res.status(200).send({token})

            res.status(200).send(user);
          }
      }
    })
  }


};

