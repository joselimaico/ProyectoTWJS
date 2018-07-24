import {Habitacion} from "../../../ProyectoApp/src/app/_models/Clases/Habitacion";

/**
 * Habitacion.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    idHabitacion: {type: 'number', required: true},
    nombreHabitacion: {type: 'string', required: true},
    tamanioHabitacion: {type: 'string', required: false},
    luzSolarHabitacion: {type: 'string', required: false},
    descripcionHabitacion: {type: 'string', required: true},
    imagenHabitacion: {type: 'string', required: false},

    lugarFK: {
      model: 'Lugar'
    },
    misPlantas:{
      collection: 'Planta',
      via: 'habitacionFK'
    },

  },

};

