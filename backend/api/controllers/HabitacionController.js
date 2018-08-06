/**
 * HabitacionController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const jwt = require('jsonwebtoken')
module.exports = {

  createRoom: async (req, res) => {
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
    // let idUsuario = payload.subject;


    let DataParams = req.allParams()
    let newRoom = await Habitacion.create(
      {
        nombreHabitacion: DataParams.nombreHabitacion,
        tamanioHabitacion: DataParams.tamanioHabitacion,
        luzSolarHabitacion: DataParams.luzSolarHabitacion,
        descripcionHabitacion: DataParams.descripcionHabitacion,
        imagenHabitacion: DataParams.imagenHabitacion,
        lugarFK: DataParams.lugarFK
      }
    ).fetch();
    res.status(200).send({newRoom});
  },

  getAllRooms: async (req,res)=>{
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
    // let idUsuario = payload.subject;



    let idLugar = dataParams.idLugar;
    await Habitacion.find({lugarFK: idLugar}, (error, listaHabitaciones) =>{
      if(error){
        res.status(401).send('no se pudo retornar lugares');
      }else{
        //console.log('lista de habitaciones: ',listaHabitaciones);
        res.status(200).send({listaHabitaciones});
      }
    })
  },

  getMyRoom: async(req,res)=>{
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

    await Habitacion.find({id:dataParams.idHabitacion}, (error,habitacion)=>{
      if(error){
        res.status(400).send('no se pudo completar la operación');
      }else{
        res.status(200).send({habitacion});
      }
    });

  }


};

