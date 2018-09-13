/**
 * UserRight.js
 *  
 * @description ::  presente l'association des roles d'un user
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'user_has_rights',
  attributes: {
   
    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    right: {model:'right', required:true, columnName:'right_id'},
    user: {model:'user', required:true, columnName:'user_id'},

    createdAt: false,
    updatedAt: false,
  },

};

