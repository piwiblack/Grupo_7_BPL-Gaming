const path = require('path');


module.exports ={ 
    productRegister:function(req,res) {
        res.render('productRegister',{
            title:'BPLE Gaming - Registro Producto'
        })
    }
}