/**
 * Especie.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombreEspecie: {
      type: 'string',
      required: true
    },
    necesidadesEspecie: {
      type: 'string',
      required: false
    },
    caracteristicasEspecie: {
      type: 'string',
      required: false
    },
    imagenEspecie: {
      type: 'string',
      required: false
    },
    plantas: {
      collection: 'Planta',
      via: 'especiePlanta'
    }
  },

};

