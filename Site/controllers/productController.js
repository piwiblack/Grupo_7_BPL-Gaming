const path = require('path');
const fs = require('fs');
const dbProducts = require(path.join(__dirname, "..", "data", "dbProducts"));
const dbCategorias = require(path.join(__dirname, "..", "data", "dbCategorias"));

module.exports ={ 
    list: function(req,res){
    let productos = dbProducts;
    

    res.render("products", {
      title: "Productos",
      productos: productos,
      
    });
    },
    detail:function(req,res) {
        let idProducto = req.params.id;
        
        let producto = dbProducts.filter(producto=>{
            return producto.id == idProducto;
        }) 
            
        
        res.render('productDetail',{
            title:'Detalle de Producto',
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
        res.render('productAdd',{
            title:'Carga de Producto',
        })
    },
    proccessAdd: function(req,res ){
        
         let ultimoId = 1;
         dbProducts.forEach( product =>{
            if(product.id > ultimoId){
                ultimoId = product.id;
            }
         })

        let newProduct= {
            id : ultimoId + 1,
            marca : req.body.marca,
            modelo : req.body.modelo,
            precio : req.body.precio,
            categoria : req.body.categoria,
            descripcion : req.body.descripcion,
            imagen : req.files[0].filename,
        }
        dbProducts.push(newProduct);
        fs.writeFileSync(path.join(__dirname, '..', 'data', 'products.json'), JSON.stringify(dbProducts),'utf-8');
        res.redirect('/product');
        



    },
    cart:function(req,res) {
        res.render('productCart',{
            title:'Carrito'
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
        let selectedProduct = dbProducts.filter((product) => {
            return product.id == req.params.id;
          });
      
          let categories = [];
          dbProducts.forEach((product) => {
            if (categories.indexOf(product.categoria) == -1) {
              categories.push(product.categoria);
            }
          });
          
      
          res.render("productEdit", {
            title: "Editar producto",
            product: dbProducts,
            selectedProduct: selectedProduct[0],
            categories: categories,
          });
    },
    proccessEdit: function(req,res){
        dbProducts.forEach(producto => {
            if (producto.id == req.body.id) {
                producto.id = req.body.id;
                producto.marca = req.body.marca.trim();
                producto.modelo = req.body.modelo.trim();
                producto.precio = req.body.precio;
                producto.categoria = req.body.categoria;
                producto.descripcion = req.body.descripcion.trim();
                producto.imagen = req.files[0].filename;
            }
          });
      
          fs.writeFileSync(path.join(__dirname, '..', 'data', 'products.json'), JSON.stringify(dbProducts),'utf-8');
          res.redirect('/product');
    },
    delete: function(req,res){
        let idProducto = req.params.id;
        dbProducts.forEach((product) => {
            if (product.id == idProducto) {
                var borrar = dbProducts.indexOf(product);
                dbProducts.splice(borrar, 1);
            };
    });
        fs.writeFileSync(path.join(__dirname, '..', 'data', 'products.json'), JSON.stringify(dbProducts),'utf-8');
        res.redirect('/product');

    },
}