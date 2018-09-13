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
    departureAdress: {
      required: true
      , type: 'json'
      , columnName:'departure_adress'
    },

    arrivalAddress: {
      required: true
      , type: 'json'
      , columnName:'arrival_address'
    },

    departureDate: {
      type: 'string',
      columnType: 'datetime',
      required: true,
      columnName: 'departure_date'
    },

    comment: {
      type: 'string',
      description: ' detaillés la course'
    },

    estimate : {
      type: 'json',
      description: `contient l\'estimation  de durée et la distance 
          calculer par google ainsi le calcul de de prix qui sera calculer coté backend`
    },


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

   

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
      columnName:'status_id',
    },

    rideType: {
      model: 'ridetype',
      columnName:'ride_type_id'
    },

  },
};

