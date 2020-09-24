const path = require('path');
// const dbCategorias = require('../data/dbCategorias');
// const dbProducts = require('../data/dbProducts')
const dbProducts = require(path.join(__dirname, "..", "data", "dbProducts"));
const dbCategorias = require(path.join(__dirname, "..", "data", "dbCategorias"));

module.exports ={ 
    list: function(req,res){
    let productos = dbProducts;
    

    res.render("products", {
      title: "BPLE Gaming-Productos",
      productos: productos,
      
    });
    },
    detail:function(req,res) {
        let idProducto = req.params.id;
        
        let producto = dbProducts.filter(producto=>{
            return producto.id == idProducto;
        }) 
            
        
        res.render('productDetail',{
            title:'BPLE Gaming - Detalle',
            producto: producto[0]
            
        })
    },
    category:function(req,res){
        
        let categorias= dbCategorias;
        
        res.render('category',{
            title:'Categorias',
            categorias:categorias
        })
    },
    productAdd:function(req,res) {
        let categoria;
        if(req.query.categoria){
            categoria=req.query.categoria
        };
        
        
        
        res.render('productAdd',{
            title:'BPLE Gaming - Registro Producto'
        })
    },
    publicar: function(req,res){
        res.send('Post')
    },
    cart:function(req,res) {
        res.render('productCart',{
            title:'BPLE Gaming - Carrito'
        })
    },
    search: function(req,res){
        let buscar= req.query.search;
        let productos=[];
        dbProducts.forEach(producto=>{
            if(producto.marca.toLowerCase(). includes(buscar.toLowerCase())|| producto.modelo.toLowerCase(). includes(buscar.toLowerCase)){
                productos.push(producto);
            }
        });
        res.render('products',{
            title: "Resultado de la busqueda",
            productos:productos
        })
    },
    edit: function(req,res){
        res.send('editar');
    },
    delete: function(req,res){
        res.send('Borrar');
    },
}