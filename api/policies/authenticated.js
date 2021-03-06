module.exports = function (req, res, next) {
   
    // User is allowed, proceed to controller
    var is_auth = req.isAuthenticated();
    
    if (is_auth) return next();

    // User is not allowed
    else res.status(403).json({ error: 'You are not permitted to perform this action.' });

};