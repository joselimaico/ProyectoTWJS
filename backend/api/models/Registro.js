/**
 * Registro.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    fechaRegistro: {type: 'string', required: true},
    horaRegistro: {type: 'string', required: true},
    estadoSueloRegistro: {type: 'string', required: false},
    sueloRegadoRegistro: {type: 'boolean', required: false},
    observacionRegistro: {type: 'string', required: false},

    plantaFK: {
      model: 'Planta'
    },
  },

};

