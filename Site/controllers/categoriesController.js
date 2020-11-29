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
}

module.exports = categoriesController;