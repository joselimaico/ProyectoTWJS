/**
 * Registro.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    fechaRegistro: {
      type: 'string',
      required: true
    },
    horaRegistro: {
      type: 'string',
      required: true
    },
    sueloRegistro: {
      type: 'string',
      required: true
    },
    tipoRiegoRegistro: {
      type: 'string',
      required: true
    },
    observacionRegistro: {
      type: 'string',
      required: true
    },
    plantaRegistro: {
      model: 'Planta',
      required: true
    }

  },

};

