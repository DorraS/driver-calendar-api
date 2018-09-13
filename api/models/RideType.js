/**
 * RideType.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName:'ride_type',
  attributes: {
    
    
    code: { type: 'string', required: true, unique: true },
    label: { type: 'string', required: true },

    createdAt: false,
    updatedAt: false,

  },

};

