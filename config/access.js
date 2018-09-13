module.exports.access = {

    /**
     *  definiton des rights pour chaque model qui correspond à la méthode http ustilisé 
     */
    'user': {
        GET: 'CONSULT_USER',
        POST: 'CREATE_USER',
        DELETE: 'DELETE_USER',
        PUT: 'EDIT_USER',
        PATCH: 'EDIT_USER'
    },


    'ride': {
        GET: 'CONSULT_RIDE',
        POST: 'CREATE_RIDE',
        DELETE: 'DELETE_RIDE',
        PUT: 'EDIT_RIDE',
        PATCH: 'EDIT_RIDE'
    }

};
