const path = require('path')
const dbProducts = require(path.join(__dirname, '..', 'data', 'dbProducts.js'), 'utf-8')

const indexController = { 
    index:function(req,res) {

        let destacados = dbProducts.filter(producto =>{
            return producto.category == "destacado"
        })

        res.render('index',{
            title:'BPLE Gaming',
            destacados: destacados
        })
    }
}
module.exports = indexController;