module.exports.login = function(req, res, next){
    if(!req.signedCookies.userId){
        res.redirect('/login');
        return;
    }
    next();
}