module.exports = function(req, res, next){
    if(req.cookies.userLogin){
        req.session.user = req.cookies.userLogin;
        res.locals.user = req.session.user  
        next()
    }else{
        next()
    }
}