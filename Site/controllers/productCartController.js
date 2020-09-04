const path = require('path');


module.exports ={ 
    cart:function(req,res) {
        res.render('productCart',{
            title:'BPLE Gaming - Carrito'
        })
    }
}