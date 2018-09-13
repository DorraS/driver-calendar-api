/**
 * UserRole.js
 *  
 * @description ::  presente l'association des roles d'un user
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
 // db config
 tableName: 'user_has_roles',
  attributes: {
    
    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    role: {model:'role', required:true, columnName: 'role_id'},
    user: {model:'user', required:true, columnName: 'user_id'},

    createdAt: false,
    updatedAt: false,
  },

};

