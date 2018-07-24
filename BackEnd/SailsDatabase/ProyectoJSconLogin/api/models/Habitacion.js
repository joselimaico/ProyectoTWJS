/**
 * Habitacion.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombreHabitacion: {
      type: 'string',
      required: true
    },

    tamanioHabitacion: {
      type: 'string',
      required: true
    },

    luzSolarHabitacion: {
      type: 'boolean',
      required: true
    },

    descripcionHabitacion: {
      type: 'string',
      required: false
    },

    imagenHabitacion: {
      type: 'string',
      required: false
    },

    plantas: {
      collection: 'Planta',
      via: 'habitacionPlanta'
    },
    lugarHabitacion: {
      model: 'Lugar',
      required: true
    }
  },

};

