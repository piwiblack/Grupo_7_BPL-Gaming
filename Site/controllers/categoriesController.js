const db = require('../database/models');
const { Op, Sequelize } = require('sequelize');


const categoriesController = {

    listCategories: function (req, res) {

        let categoriesList = db.Categories.findAll()

        Promise.all([categoriesList,])
            .then(function ([categories]) {
                res.render('categoriesList', {
                    title: 'BPLE - Categories',
                    categories: categories,
                    total: categories.length
                })
            })
    },


    addForm: (req, res) => {
        res.render('categorieAdd', {
            title: 'BPLE Gaming - Registro Categoria',
        })
    },

    addCategory: function (req, res, next) {
        db.Categories.create({
            name: req.body.name
        })
            .then(category => {
                return res.redirect('/categories/categorieslist/')
            })
            .catch(err => {
                res.send(err)
            })


    },

    saveCategorie: function (req, res) {
        db.Categories.update({
            name: req.body.name
        },
            {
                where: {
                    id: req.params.id
                }
            })
            .then(user => {
                return res.redirect('/categories/categorieslist')

            })

    },

    categorieAdmin: function (req, res) {
        let requiredCategorie = db.Categories.findByPk(req.params.id)

        Promise.all([requiredCategorie])
            .then(function ([category]) {
                res.render('categoryEdit', {
                    title: 'BPLE - ' + category.name,
                    category: category,
                })
            })
    },


    search: function (req, res) {

        let categoriesSearch = db.Categories.findAll({
            where: {
                name: {
                    [Op.substring]: req.query.search
                }
            }
        })

        Promise.all([categoriesSearch])
            .then(function ([categories]) {
                res.render('categoriesList', {
                    title: 'BPLE - Categorias ' + req.query.search,
                    categories: categories,
                    total: categories.length,
                })
            })
    },

    listProducts: function (req, res) {
        let categoriesList = db.Categories.findAll({
            order: [
                ['name', 'ASC']
            ]
        })

        let productsCategorie = db.Products.findAll({ where: { id_category: req.params.id } })

        Promise.all([categoriesList, productsCategorie])
            .then(function ([categories, products]) {
                res.render('products', {
                    title: 'BPLE - Productos',
                    products: products,
                    total: products.length,
                    categories: categories
                })
            })


            .catch(error => {
                console.log(error)
            })
    },

}

module.exports = categoriesController;