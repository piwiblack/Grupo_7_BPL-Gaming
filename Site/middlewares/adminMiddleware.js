module.exports = function(req, res, next){
    if(req.session.user.category == "admin"){
        next()
    }else{
        res.redirect('/')
    }
}