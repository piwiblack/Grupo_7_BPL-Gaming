const path = require('path');


module.exports ={ 
    login:function(req,res) {
        res.render('login',{
            title:'BPLE Gaming - Ingresar'
            
        })
    },
    loginProcess: function(req,res){
        res.send('Post');
    },
    register:function(req,res) {
        res.render('register-user',{
            title:'BPLE Gaming - Registro'
        })
    },
    registerProcess: function(req,res){
        res.send('Post');
    },
    profile: function(req,res){
        res.send('Perfil');
    }
}