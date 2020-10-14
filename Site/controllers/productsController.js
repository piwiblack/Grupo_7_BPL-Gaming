const path = require('path');
const fs = require('fs');
const { debugPort } = require('process');

const dbProducts = require('../data/dbProducts')
const dbCategories = require('../data/dbCategories');


const productsController = {

    products: function (req, res) {
        let productos = [];

        dbProducts.forEach(producto => {
            productos.push(producto)
        })


        res.render('products', {
            title: 'BPLE - Productos',
            productos: productos,
            categories: dbCategories,
            total: productos.length

        })
    },


    detail: function (req, res) {

        let productoElegido;

        dbProducts.forEach(product => {
            if (product.id == req.params.id) {
                productoElegido = product
            }
        });

        res.render('productDetail', {
            title: 'BPLE - ' + productoElegido.name,
            producto: productoElegido
        })

    },

    add: function (req, res, next) {

        let lastID = 1;

        dbProducts.forEach(producto =>{
            if(producto.id > lastID){
                lastID = producto.id 
            }
        })

        let productoNuevo = {
            id: lastID + 1,
            name: req.body.name,
            price: Number(req.body.price),
            category: req.body.category,
            description: req.body.description,
            warranty: Number(req.body.warranty),
            image: req.files[0].filename
        }

        

        dbProducts.push(productoNuevo);

        let productosJson = JSON.stringify(dbProducts)

        fs.writeFileSync(path.join(__dirname, '..', 'data', 'products.json'), productosJson)

        res.redirect('/users/productlist/' + productoNuevo.id)
    },

    cart: function (req, res) {
        res.render('productCart', {
            title: 'BPLE - Carrito'
        })
    },

    search: function (req, res) {
        let busqueda = (req.query.search);

        let productos = [];

        dbProducts.forEach(producto => {
            if (producto.name.toLowerCase().includes(busqueda.toLowerCase())) {
                productos.push(producto)
            }
        })


        res.render('products', {
            title: 'BPLE - ' + busqueda,
            productos: productos,
            total: productos.length,
            categories: dbCategories
        })
    },

    editForm: function (req, res) {

        let productoAEditar;

        dbProducts.forEach(product => {
            if (product.id == req.params.id) {
                productoAEditar = product
            }
        });

        res.render('productEdit', {
            producto: productoAEditar,
            title: 'BPLE - Editar Producto',
            categories: dbCategories
        })
    },

    edit: function (req, res) {

        dbProducts.forEach(product => {
            if (product.id == req.params.id) {
                product.name = req.body.name
                product.price = req.body.price
                product.category = req.body.category
                product.description = req.body.description
                product.warranty = req.body.warranty
                product.image = req.files[0].filename
            }
        });

        let productosJson = JSON.stringify(dbProducts)

        fs.writeFileSync(path.join(__dirname, '..', 'data', 'products.json'), productosJson)

        res.redirect('/users/productList/' + req.params.id)
    },

    delete:function(req,res){
        let inidiceDelproducto;

        dbProducts.forEach(producto =>{
            if(producto.id == req.params.id){
                inidiceDelproducto = dbProducts.indexOf(producto);
            }
        })

        dbProducts.splice(inidiceDelproducto, 1)

        let productosJson = JSON.stringify(dbProducts)

        fs.writeFileSync(path.join(__dirname, '..', 'data', 'products.json'), productosJson)


        res.redirect('/users/productList')
    }

}
module.exports = productsController;