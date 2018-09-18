/**
 * User.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

var bcrypt = require('bcrypt');
var Promise = require("bluebird");
var _ = require('lodash');

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
      allowNull: true,
    },
    password: {
      type: 'string',
      allowNull: true,
    },
    phoneNumber: {
      type: 'string',
      allowNull: true,
    },
    socialSecurityNumber: {
      type: 'number',
      allowNull: true,
    },
    address: {
      type: 'json',
    },
    color: {
      type: 'string',
      defaultsTo: '#ffffff',
    },

    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    roles: { collection: 'role', via: 'user', through: 'userrole' },
    rights: { collection: 'right', via: 'user', through: 'userright' },

    status: { model: 'status', columnName: 'status_id' }

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

  /**
   *  get user rights
   */
  
  getRights: async function (id) {

    var getRoleRights= function (role) {
      return Role.findOne(role.id).populate('rights');
    };

    var mapRoles = function (user) {
      if (user && user.roles) {
        return [user, Promise.map(user.roles, getRoleRights)];
      }
    };

    return await User.findOne(id).populate('roles').populate('rights')
      .then(mapRoles)
      .spread(function (user, roles) {
        const rights = _.map(roles, role => role.rights);
        let userRights = user.rights;
        _.forEach(rights, right => _.concat(userRights, right));
        console.log('rights', userRights);
        return   _.map(userRights, right => right.code);;
      });
  }

};

