const path = require('path');
const express = require(`express`);
const bcrypt = require('bcrypt');
const fs = require(`fs`);
const { validationResult } = require('express-validator');

const dbProducts = require('../data/dbProducts');
const dbCategories = require('../data/dbCategories');
const dbUsers = require('../data/dbUsers');


const usersController = {
    register: function (req, res, next) {

        let errors = validationResult(req)

        if (errors.isEmpty()) {
            let lastID = 1;

            dbUsers.forEach(usuario => {
                if (usuario.id > lastID) {
                    lastID = usuario.id
                }
            })

            let usuarioNuevo = {
                id: lastID + 1,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                phone: req.body.phone,
                email: req.body.email,
                city: req.body.city,
                state: req.body.state,
                password: bcrypt.hashSync(req.body.password, 10)
            }



            dbUsers.push(usuarioNuevo);

            let usuariosJson = JSON.stringify(dbUsers)

            fs.writeFileSync(path.join(__dirname, '..', 'data', 'users.json'), usuariosJson)

            res.redirect('/users/login/')
        } else {
            res.render('register', { errors: errors.errors, title: 'BPLE Gaming - Registro' })
        }




    },
    login: function (req, res, next) {

        let errors = validationResult(req)

        if (!errors.isEmpty()) {
            res.render('login', { errors: errors.errors, title: 'BPLE Gaming - Login' })
        } else {
            dbUsers.forEach(user => {
                if (user.email == req.body.email && bcrypt.compareSync(req.body.password, user.password)) {
                    req.session.user = {
                        id: user.id,
                        email: user.email,
                        name: user.first_name + " " + user.last_name,
                        phone: user.phone              
                    };                

                    if(req.body.remember == 'on'){
                        res.cookie('userLogin', req.session.user,{maxAge:1000*60*60})
                    }

                    res.redirect('/')
                }
            })  

            res.render('login', { errors: [{ msg: 'El usuario y la contraseña no coinciden' }], title: 'BPLE Gaming - Login' })
        }

    },

    productList: function (req, res) {
        res.render('adminProductList', {
            title: "BPLE Gaming - Perfil",
            productos: dbProducts.filter(producto => {
                return producto.category != "visited" && producto.category != "in-sale"
            }),
            total: dbProducts.length,
            categories: dbCategories
        })
    },

    productAdmin: function (req, res) {
        let productoElegido;

        dbProducts.forEach(product => {
            if (product.id == req.params.id) {
                productoElegido = product
            }
        });

        res.render('adminProduct', {
            title: 'BPLE - ' + productoElegido.name,
            producto: productoElegido,
            destacados: dbProducts
        })
    },

    profile: function (req, res) {
        res.render('profile', {
            title: 'BPLE - Perfil',
            user: req.session.user
        })
    },

    logout: function(req,res){
        req.session.destroy()
        res.redirect('/users/login')
        if(req.cookies.userLogin){
            res.cookie('userLogin',' ',{maxAge:-1});
        }
        res.redirect('/')
    }


}

module.exports = usersController;