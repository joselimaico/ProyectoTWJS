/**
 * User.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */


module.exports = {

  attributes: {
    idUsuario: {type:'number',required: true},

    email:{ type: 'string', required: true, unique: true },
    username: { type: 'string', required: true, unique: true },
    password: { type: 'string', required: true },

    nombreUsuario: {type: 'string',required:true},
    apellidoUsuario: {type: 'string',required:true},
    fechaNacimientoUsuario: {type:'string',required:false},
    imagenUsuario: {type: 'string',required: false},

    misLugares:{
      collection: 'Lugar',
      via: 'usuarioFK'
    }

  },
  // datastore: 'myMongo',


};

