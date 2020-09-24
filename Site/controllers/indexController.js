const path = require('path');
// const dbProducts = require(path.join(__dirname, '..', 'data', 'dbProducts'));
let dbProducts= require ('../data/dbProducts')
module.exports ={ 
    home:function(req,res) {
        
        let destacados= dbProducts.filter(producto=>{
            return producto.estado=="destacado";
        });
        
        let oferta= dbProducts.filter(producto=>{
            return producto.estado=="oferta"
        })
        
        res.render('index',{
            title: 'BPLE Gaming',
            destacados: destacados,
            oferta: oferta
        })
        
    }
}
