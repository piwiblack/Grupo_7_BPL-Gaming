const path = require('path');


module.exports ={ 
    register:function(req,res) {
        res.render('register-user',{
            title:'BPLE Gaming - Registro'
        })
    },
    registerProccess: function(req,res){
        res.send('Post');
    },

    login:function(req,res) {
        res.render('login',{
            title:'BPLE Gaming - Ingresar'
            
        })
    },

    loginProccess: function(req,res){
        res.send('Post');
    },

    profile: function(req,res){
        res.send('Perfil');
    },

    editProccess: function(req,res){
        res.send('Put');
    },
}