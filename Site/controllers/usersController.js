const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const db = require('../database/models');


const usersController = {
    register: function (req, res, next) {
        let errors = validationResult(req)

        if (errors.isEmpty()) {
            db.Users.create({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                phone: req.body.phone,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10),
                category: "user"
            })
                .then(user => {
                    return res.redirect('/users/login/')
                })
                .catch(err => {
                    res.send(err)
                })

        } else {
            res.render('register', {
                errors: errors.errors,
                title: 'BPLE Gaming - Registro'
            })
        }
    },

    login: function (req, res, next) {
        let errors = validationResult(req)

        if (errors.isEmpty()) {
            db.Users.findOne({
                where: {
                    email: req.body.email
                }
            })
                .then(user => {
                    req.session.user = user

                    if (req.body.remember == 'on') {
                        res.cookie('userLogin', req.session.user, { maxAge: 1000 * 60 * 60 })
                    }
                    
                    return res.redirect('/')
                })
                .catch(err => {
                    res.send(err)
                })

        } else {
            res.render('login', { errors: errors.errors, title: 'BPLE Gaming - Login' })
        }

    },

    productList: function (req, res) {
        let categoriesList = db.Categories.findAll();

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

    profile: function (req, res) {
        res.render('profile', {
            title: 'BPLE - Perfil',
            user: req.session.user
        })
    },

    logout: function (req, res) {
        req.session.destroy()
        res.redirect('/users/login')
        if (req.cookies.userLogin) {
            res.cookie('userLogin', ' ', { maxAge: -1 });
        }
        res.redirect('/')
    }
}

module.exports = usersController;