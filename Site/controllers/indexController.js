const db = require('../database/models')

const indexController = { 
    index:function(req,res) {
        db.Products.findAll({
            where:{
                status: "on"
            }
        })
            .then(products =>{
                res.render('index',{
                    title:'BPLE Gaming',
                    products: products
                })
            })
    }
}
module.exports = indexController;