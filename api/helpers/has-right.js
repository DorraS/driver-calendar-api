module.exports = {


  friendlyName: 'Has right',


  description: 'verify if user has specifect right. is user has ALL_ACCES right return true',
  

  inputs: {
    userId:  {
      type: 'number',
      example: 12,
      description: 'user id who will be check if have right to acces to feature',
      required: true,
    },
    path : 
    {
      type: 'string',
      example:'user/2',
      description: 'the path of the current request sended by user',
      required: true,
    },
    method : 
    {
      type: 'string',
      example:'POST',
      description: 'the method http of the current request',
      required: true,
    },
  },


  exits: {

  },


  fn: async function (inputs, exits) {
     
    // recovery of user rights
    userRights = await User.getRights(inputs.userId);

    if(!userRights){
      return false;
    }
    

    // recuperation on called functionality
    let endPoint = inputs.path.substr(inputs.path.indexOf('/')+1, inputs.path.lastIndexOf('/'));
    

    console.log('dsqdqsd',endPoint,inputs.method);
    
    hasRole = false;
    // find right in config by path and and http method 
   const  rightToCheck = sails.config.access[endPoint][inputs.method];
    
   userRights.forEach( right => {
      
      if( right === 'ALL_ACCESS' || right === rightToCheck) {
        hasRole = true;
        return;
      }
      
    });
    
    return exits.success(hasRole);

  }


};


