/**
 * Registro.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    idRegistro: {type: 'number', required: true},
    fechaRegistro: {type: 'string', required: true},
    horaRegistro: {type: 'string', required: true},
    estadoSueloRegistro: {type: 'string', required: true},
    sueloRegadoRegistro: {type: 'boolean', required: true},
    observacionRegistro: {type: 'string', required: false},

    plantaFK: {
      model: 'Planta'
    },
  },

};

