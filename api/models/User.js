/**
 * User.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

var bcrypt = require('bcrypt');

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    firstName: {
      type: 'string',
      required: true,
    },
    lastName: {
      type: 'string',
      required: true,
    },
    email: {
      type: 'string',
      isEmail: true,
      allowNull:true,
    },
    password: {
      type: 'string',
      allowNull:true,
    },
    phoneNumber: {
      type: 'string',
      allowNull:true,
    },
    socialSecurityNumber: {
      type: 'number',
      allowNull:true,
    },
    address: {
      type: 'json',
    },
    
    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    roles: {collection: 'role', via: 'user',through: 'userrole' },
    rights: {collection: 'right', via: 'user',through: 'userright' }
    
  },


  beforeCreate: function (user, callback) {
    bcrypt.hash(user.password, 10, function (err, hash) {
      user.password = hash;
      callback();
    });
  },

  customToJSON: function () {
    // Return a shallow copy of this record with the password and ssn removed.
    return _.omit(this, ['password'])
  },

};

