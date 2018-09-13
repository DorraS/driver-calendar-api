
module.exports =  async function (req, res, next) {
 
    const currUser=  req.session.user;
    
    if(currUser && currUser.id){
        var hasRight =  await sails.helpers.hasRight(req.user.id,req.path,req.method);
        if (hasRight) return next();
    }
     
    res.status(403).json({ error: 'You are not permitted to perform this action.' });
};