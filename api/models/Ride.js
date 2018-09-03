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

    estimate : {
      type: 'json',
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
      , type: 'json'
    },

    arrivalAddress: {
      // model: 'address'
      required: true
      , type: 'json'
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

    rideType: {
      model: 'ridetype',
    },

  },
};

