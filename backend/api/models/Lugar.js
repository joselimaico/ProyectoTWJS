import {Habitacion} from "../../../ProyectoApp/src/app/_models/Clases/Habitacion";

/**
 * Lugar.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    idLugar: {type: 'number', required: true},
    nombreLugar: {type: 'string', required: true},
    tipoLugar: {type: 'string', required: false},
    sectorLugar: {type: 'string', required: false},
    descripcionLugar: {type: 'string', required: true},
    imagenLugar: {type: 'string', required: false},

    usuarioFK: {
      model: 'Usuario'
    },
    misHabitaciones:{
      collection: 'Habitacion',
      via: 'lugarFK'
    },

  }

};

