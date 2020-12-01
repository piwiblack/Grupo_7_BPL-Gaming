const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const db = require('../database/models');
const {Op, Sequelize} = require('sequelize');

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
                category: "user",
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

    usersList: function (req, res) {

        let usersList = db.Users.findAll()

        Promise.all([usersList])
            .then(function ([users]) {
                res.render('adminUserList', {
                    title: 'BPLE - Usuarios',
                    users: users,
                    total: users.length
                })
            })
    },

    userProfile: function (req, res) {
        let usersList = db.Users.findAll()


        let requiredUser = db.Users.findByPk(req.params.id)

        Promise.all([usersList, requiredUser])
            .then(function ([usersList, user]) {
                res.render('adminUser', {
                    title: 'BPLE - ' + user.name,
                    user: user,
                    usersList: usersList
                })
            })
    },


    profile: function (req, res) {
        let userAdmin = req.session.user

        db.Users.findByPk(req.session.user.id)
            .then(user =>{
                res.render('profile', {
                    title: 'BPLE - Perfil',
                    user: user,
                    admin: user
                })
            })
        
    },

    logout: function (req, res) {
        req.session.destroy()
        res.redirect('/')
        if (req.cookies.userLogin) {
            res.cookie('userLogin', ' ', { maxAge: -1 });
        }
    },


    editUser: function (req, res) {
        db.Users.update({
            phone: req.body.phone,
            street: req.body.street,
            city: req.body.city,
            state: req.body.state,
            cp: req.body.cp,
            house_number: req.body.house_number,
            apartment: req.body.apartment,
            floor: req.body.floor,
           // image: (req.files[0]) ? req.files[0].filename : req.body.images
        },
            {
                where: {
                    id: req.params.id
                }
            })
            .then(user => {
                return res.redirect('/users/profile')

            })
    },

    
    addAdmin: function (req, res) {
        let usersList = db.Users.findAll()


        let requiredUser = db.Users.findByPk(req.params.id)

        Promise.all([usersList, requiredUser])
            .then(function ([usersList, user]) {
                res.render('addAdmin', {
                    title: 'BPLE - ' + user.name,
                    user: user,
                    usersList: usersList
                })
            })
    },

    saveAddAdmin: function (req, res) {
        db.Users.update({
            category: req.body.category
        },
            {
                where: {
                    id: req.params.id
                }
            })
            .then(user => {
                return res.redirect('/users/profile')

            })

    },

    search: function (req, res) {

        let usersSearch = db.Users.findAll({
            where: {
                [db.Sequelize.Op.or]: {
                    email: { [db.Sequelize.Op.like]: `%${req.query.search}%` }, 
                    first_name: { [db.Sequelize.Op.like]: `%${req.query.search}%` } 
                }
            }
        })

        Promise.all([usersSearch])
        .then(function([users]){
            res.render('adminUserList', {
                title: 'BPLE - Usuarios ' + req.query.search,
                users: users,
                total: users.length,
            })
        })
       
    },


}

module.exports = usersController;