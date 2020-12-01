module.exports = function(req, res, next){
    if(req.session.user){
        res.redirect('/users/profile')
    }else{
        next()
    }
}