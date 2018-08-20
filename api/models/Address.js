/**
 * Address.js
 *
 * @description ::   A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    city: { type: 'string', required: true },
    zip: { type: 'string', required: true },
    street: { type: 'string', required: true },
    country: { type: 'string' },
    
    createdAt: false,
    updatedAt: false,
  },

};

