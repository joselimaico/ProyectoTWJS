/**
 * Planta.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombrePlanta:{
      type:'string',
      required:true
    },
    detalleSueloPlanta:{
      type:'string',
      required:true
    },
    imagenPlanta:{
      type:'string',
      required:false
    },
    registros:{
      collection:'Registro',
      via:'plantaRegistro'
    },
    habitacionPlanta:{
      model:'Habitacion',
      required:true
    },
    especiePlanta:{
      model:'Especie',
      required:true
    }

  },

};

