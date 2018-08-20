/**
 * Ride.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    departureDate: {
      type: 'string',
      columnType: 'datetime',
      required: true,
    },

    comment: {
      type: 'string',
      description: ' detaillés la course'
    },

    durention: {
      type: 'number',
      description: 'temps dela course en s'
    },

    distance: {
      type: 'number',
      description: 'distance de la course en m',
    },

    estimatePrice: {
      type: 'number',
      description: 'estimation du prix de la course en euro ou autre divise selon le type de la course'
    },

    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

    departureAdress: {
      // model: 'address'
      required: true
      , type: 'string'
    },

    arrivalAddress: {
      // model: 'address'
      required: true
      , type: 'string'
    },

    driver: {
      model: 'user',
      description: 'le chiffeur qui s\'occupe de la course',
    },

    customer: {
      model: 'user',
      required: true,
    },

    status: {
      model: 'status',
    },

    typeRide: {
      model: 'ridetype',
    },

  },
};

