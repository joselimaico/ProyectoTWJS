/**
 * Usuario.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombreCompletoUsuario: {
      type: 'string',
      required: true,
      description: 'Representación completa del nombre del usuario',
      example: 'Abradolf Lincler'
    },
    correoUsuario: {
      type: 'string',
      required: true,
      unique: true,
      isEmail: true,
      maxLength: 200,
      example: 'nombre.apellido@ejemplo.com'
    },

    passwordUsuario: {
      type: 'string',
      required: true,
      description: 'Se guarda el hash de la contrasenia',
      protect: true,
      example: '2$28a8eabna301089103-13948134nad'
    },

    imagenUsuario: {
      type: 'string',
      required: false,
      description: 'imagen del usuario para mostrar',
      example: 'Abradolf Lincler'
    },

    lugares: {
      collection: 'Lugar',
      via: 'usuarioLugar'
    }

  },

};

