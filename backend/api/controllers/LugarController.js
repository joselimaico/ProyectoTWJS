/**
 * LugarController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const jwt = require('jsonwebtoken')
module.exports = {
  verifyToken: (req, res, next)=>{
    if(!req.headers.authorization){
      return res.status(401).send('Unauthorized Request');
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null'){
      return res.status(401).send('Unauthorized Request');
    }
    let payload = jwt.verify(token, 'llaveSecreta');
    if(!payload){
      return res.status(401).send('Unauthorized Request');
    }
    req.userId = payload.subject
    next()
  },

   createPlace: async (req, res) => {
     if(!req.headers.authorization){
       return res.status(401).send('Unauthorized Request');
     }
     let token = req.headers.authorization.split(' ')[1]
     if(token === 'null'){
       return res.status(406).send('El token esta vacio');
     }
     console.log('token :',token);
     let payload = jwt.verify(token, 'llaveSecreta');
     if(!payload){
       return res.status(401).send('El token es incorrecto');
     }
     //console.log('el payload es: ',payload);
     let idUsuario = payload.subject;




    let DataParams = req.allParams()
    let newPlace = await Lugar.create(
       {
         nombreLugar: DataParams.nombreLugar,
         tipoLugar: DataParams.tipoLugar,
         sectorLugar: DataParams.sectorLugar,
         descripcionLugar: DataParams.descripcionLugar,
         imagenLugar: DataParams.imagenLugar,
         // lugarFK:
       }
     ).fetch();
    res.status(200).send({newPlace});
   }



};

