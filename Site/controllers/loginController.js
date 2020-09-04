const path = require('path');


module.exports ={ 
    home:function(req,res) {
        res.render('login',{
            title:'BPLE Gaming - Ingresar'
        })
    }
}