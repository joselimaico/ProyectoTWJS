/**
 * PlantaController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


const jwt = require('jsonwebtoken')
module.exports = {

  createNewPlant: async(req,res)=>{
    let DataParams = req.allParams();

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

    let newPlant = await Planta.create(
      {
        nombrePlanta: DataParams.nombrePlanta,
        detallePlanta: DataParams.detallePlanta,
        imagenPlanta: DataParams.imagenPlanta,
        habitacionFK: DataParams.habitacionFK
      }
    ).fetch();
    res.status(200).send({newPlant});
  },

  getAllPlants: async(req, res)=>{
    let DataParams = req.allParams();

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

    let idHabitacion = DataParams.idHabitacion;
    await Planta.find({habitacionFK:idHabitacion}, (error, listaPlantas) =>{
      if(error){
        res.status(400).send('error, no pudimos encontrar sus plantas');
      }else{
        res.status(200).send({listaPlantas});
      }
    })
  },

  getMyPlant: async(req, res)=>{
    let DataParams = req.allParams();

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

    let idPlanta = DataParams.idPlanta;
    await Planta.find({id:idPlanta},(error, plantaEncontrada) => {
      if(error){
        res.status(400).send('error con la planta encontrada');
      }else{
        res.status(200).send({plantaEncontrada})
      }
    })
  }

};

