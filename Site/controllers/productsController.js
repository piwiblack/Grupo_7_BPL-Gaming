const db = require('../database/models');
const {Op, Sequelize} = require('sequelize');


const productsController = {

    listProducts: function (req, res) {
        let categoriesList = db.Categories.findAll({
            order: [
                ['name', 'ASC']
            ]
        })

        let productsList = db.Products.findAll()

        Promise.all([categoriesList, productsList])
            .then(function ([categories, products]) {
                res.render('products', {
                    title: 'BPLE - Productos',
                    products: products,
                    categories: categories,
                    total: productos.length
                })
            })
    },

    detail: function (req, res) {
        db.Products.findByPk(req.params.id)
            .then(product => {
                res.render('productDetail', {
                    title: 'BPLE - ' + product.name,
                    producto: product
                })
            })
    },


    addForm: (req, res) => {
        db.Categories.findAll()
            .then(categories => {
                res.render('productRegister', {
                    title: 'BPLE Gaming - Registro Producto',
                    categories: categories
                })
            })
    },

    addProduct: function (req, res, next) {
        db.Products.create({
            name: req.body.name,
            price: Number(req.body.price),
            id_category: req.body.category,
            description: req.body.description,
            warranty: Number(req.body.warranty),
            images: req.files[0].filename,
            status: req.body.status,
            id_manager: 1
        })
            .then(product => {

                return res.redirect('/users/productlist/' + product.id)
            })
            .catch(err => {
                res.send(err)
            })


    },

    cart: function (req, res) {
        res.render('productCart', {
            title: 'BPLE - Carrito'
        })
    },

    search: function (req, res) {
        let categoriesList = db.Categories.findAll({
            order: [
                ['name', 'ASC']
            ]
        })

        let productSearch = db.Products.findAll({
            where: {
                name: {
                    [Op.substring] : req.query.search
                }
            }
        })

        Promise.all([categoriesList, productSearch])
        .then(function([categories, products]){
            res.render('products', {
                title: 'BPLE - Lista' + req.query.search,
                products: products,
                total: products.length,
                categories: categories
            })
        })
       
    },

    editForm: function (req, res) {
        let requiredProduct = db.Products.findByPk(req.params.id)

        let categoriesList =db.Categories.findAll({
            order: [
                ['name', 'ASC']
            ]
        })
        Promise.all([requiredProduct, categoriesList])
            .then(function ([product, categories]) {
                res.render('productEdit', {
                    title: 'BPLE - Editar Producto',
                    product: product,
                    categories: categories
                })
            })
            .catch(err => {
                res.send(err)
            })
    },

    editProduct: function (req, res) {
        db.Products.update({
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            id_category: req.body.category,
            warranty: req.body.warranty,
            images: (req.files[0]) ? req.files[0].filename : req.body.images,
            status: req.body.status
        },
            {
                where: {
                    id: req.params.id
                }
            })

        res.redirect("/users/productlist/" + req.params.id)
    },

    delete: function (req, res) {
        db.Products.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(product => {
                return res.redirect('/users/productList')
            })
            .catch(err => {
                res.send(err)
            })
    }
}

module.exports = productsController;