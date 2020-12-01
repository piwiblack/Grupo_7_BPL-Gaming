const db = require('../database/models');
const { Op, Sequelize } = require('sequelize');


const productsController = {

    listCategories: function (req, res) {
        db.Products.findAll({
            include: [{ association: "products" }]
        })
            .then(categorie => {
                res.render()
            })


    },

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

        let categoriesList = db.Categories.findAll();
        let productDetail = db.Products.findByPk(req.params.id)


            Promise.all([categoriesList, productDetail])
            .then(function ([categories, products]) {
                res.render('productDetail', {
                    title: 'BPLE - ' + products.name,
                    producto: products,
                    categories: categories,
                    total: products.length
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
            status: req.body.status
        })
            .then(product => {

                return res.redirect('/product/productlist/' + product.id)
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
                    [Op.substring]: req.query.search
                }
            }
        })

        Promise.all([categoriesList, productSearch])
            .then(function ([categories, products]) {
                res.render('products', {
                    title: 'BPLE - Productos ' + req.query.search,
                    products: products,
                    total: products.length,
                    categories: categories
                })
            })

    },







    editForm: function (req, res) {
        let requiredProduct = db.Products.findByPk(req.params.id)

        let categoriesList = db.Categories.findAll({
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

        res.redirect("/product/productlist/" + req.params.id)
    },

    delete: function (req, res) {
        db.Products.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(product => {
                return res.redirect('/product/productList')
            })
            .catch(err => {
                res.send(err)
            })
    },









    productList: function (req, res) {
        let categoriesList = db.Categories.findAll({
            order: [
                ['name', 'ASC']
            ]
        })
        let productsList = db.Products.findAll()

        Promise.all([categoriesList, productsList])
            .then(function ([categories, products]) {
                res.render('adminProductList', {
                    title: "BPLE Gaming - Perfil",
                    total: products.length,
                    products: products,
                    categories: categories
                })
            })
    },

    productAdmin: function (req, res) {
        let productList = db.Products.findAll()


        let requiredProduct = db.Products.findByPk(req.params.id, {
            include: [{ association: "categories" }]
        })

        Promise.all([productList, requiredProduct])
            .then(function ([productList, product]) {
                res.render('adminProduct', {
                    title: 'BPLE - ' + product.name,
                    product: product,
                    productList: productList
                })
            })
    },

    searchAdmin: function (req, res) {
        let productSearch = db.Products.findAll({
            where: {
                name: {
                    [Op.substring]: req.query.search
                }
            }
        })

        Promise.all([productSearch])
            .then(function ([products]) {
                res.render('adminProductList', {
                    title: 'BPLE - Busqueda: ' + req.query.search,
                    products: products,
                    total: products.length,
                })
            })
    },

    listProductsAdmin: function (req, res) {
        let productsCategorie = db.Products.findAll({ where: { id_category: req.params.id } })

        Promise.all([productsCategorie])
            .then(function ([products]) {
                res.render('adminProductList', {
                    title: 'BPLE - Productos',
                    products: products,
                    total: products.length,
                })
            })
    },


}

module.exports = productsController;