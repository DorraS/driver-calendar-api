/**
 * AuthController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const passport = require('passport');

module.exports = {

    login: function (req, res) {
       sails.log('function : login');

        passport.authenticate('local', function (err, user, info) {
            
            if ((err) || (!user)) {

                sails.log(err);
                return res.status(401).json({
                    error: info.message,
                });
            }

            req.logIn(user, function (err) {
                if (err) res.send(err);
                return res.send({
                    message: info.message,
                    user
                });
            });
        })(req, res);

    },

    logout: function(req, res) {
        req.logout();
        res.redirect('/');
    }

};

