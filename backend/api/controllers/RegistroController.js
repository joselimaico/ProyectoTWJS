/**
 * RegistroController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  saveRegister:async (req, res)=>{
    let params = req.allParams()
    let created = await Registro
      .create(
        {
          fechaRegistro: params.fechaRegistro,
          horaRegistro: params.horaRegistro
        }).fetch()
    return res.json(created);
}


};

