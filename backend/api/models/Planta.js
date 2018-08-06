/**
 * Planta.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombrePlanta: {type:'string',required: true},
    detallePlanta:{type:'string',required:false},
    imagenPlanta: {type:'string',required:false},

    habitacionFK:{
      model:'Habitacion'
    },
    misRegistros:{
      collection:'Registro',
      via:'plantaFK'
    }
  },

};

