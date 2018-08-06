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
         usuarioFK: idUsuario
       }
     ).fetch();
    res.status(200).send({newPlace});
   },

   getMyPlace: async (req, res) => {
    let dataParams = req.allParams();
     if(!req.headers.authorization){
       return res.status(401).send('Unauthorized Request');
     }
     let token = req.headers.authorization.split(' ')[1]
     if(token === 'null'){
       return res.status(406).send('El token esta vacio');
     }
     // console.log('token :',token);
     let payload = jwt.verify(token, 'llaveSecreta');
     if(!payload){
       return res.status(401).send('El token es incorrecto');
     }
     //console.log('el payload es: ',payload);
     let idUsuario = payload.subject;
     await Lugar.find({usuarioFK: idUsuario}, (error, listaLugares) =>{
       if(error){
         res.status(401).send('no se pudo retornar lugares');
       }else{
         //console.log('lista de lugares: ',listaLugares);

         let lugarEncontrado =[];
         //console.log('esto tengo del front, ',dataParams);

         for(let lugar of listaLugares){
           // console.log('lugar: ',lugar);

           if(lugar.id === dataParams.idLugar){
             lugarEncontrado.push(lugar);
           }

         }

         // listaLugares.forEach((lugar) =>{
         //   if(lugar.id === dataParams.idLugar){
         //     lugarEncontrado.push(lugar);
         //   }
         // })

         //console.log('el lugar encontrado es: ',lugarEncontrado);
         res.status(200).send({lugarEncontrado});
       }
     })
   },

  getAllPlaces: async (req,res)=>{
    let dataParams = req.allParams();
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

    await Lugar.find({usuarioFK: idUsuario}, (error, listaLugares) =>{
      if(error){
        res.status(401).send('no se pudo retornar lugares');
      }else{
        console.log('la lista de lugares es: ',listaLugares);
        res.status(200).send({listaLugares});
      }
    })
  },




};

