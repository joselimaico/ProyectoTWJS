/**
 * RegistroController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const jwt = require('jsonwebtoken')
module.exports = {

  saveRegister:async (req, res)=>{
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

    let newRegistro = await Registro.create(
      {
        fechaRegistro: DataParams.fechaRegistro,
        horaRegistro: DataParams.horaRegistro,
        estadoSuelo: DataParams.estadoSuelo,
        sueloRegadoRegistro: DataParams.sueloRegadoRegistro,
        observacionRegistro: DataParams.observacionRegistro,
        plantaFK: DataParams.plantaFK
      }
    ).fetch();

    res.status(200).send({newRegistro});
  },

  getAllRecords: async(req, res) =>{
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

    await Registro.find({plantaFK:idPlanta}, (error, listaDeRegistros)=>{
      if(error){
        res.status(400).send('no puedo encontrar los registros');
      }else{
        res.status(200).send({listaDeRegistros});
      }
    })

  }


};

