/**
 * Lugar.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombreLugar: {
      type: 'string',
      required: true,
    },

    tipoLugar: {
      type: 'string',
      required: true,
    },
    sectorLugar: {
      type: 'string',
      required: true,
    },
    descripcionLugar: {
      type: 'string',
      required: false,
    },
    imagenLugar: {
      type: 'string',
      required: false,
    },

    habitaciones: {
      collection: 'Habitacion',
      via: 'lugarHabitacion'
    },

    userLugar: {
      model: 'User',
      required: true
    }
  },

};

