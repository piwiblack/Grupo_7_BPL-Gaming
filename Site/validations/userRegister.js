var express = require('express');
var router = express.Router();
const { check, validationResult, body } = require('express-validator')
let db = require('../database/models')

const register = [
    check('email').isEmail().withMessage('El email ingresado no es valido'),
    body('email').custom((value) =>{
        return db.Users.findOne({
            where: {
                email: value
            }
        })
        .then(user => {
            if(user){
                return Promise.reject('El email ingresado ya esta registrado')
            }
        })
    }),
    check('password').isLength({min:8}).withMessage('La contraseña debe tener mas de 8 digitos'),
    body('password2')
    .custom((value,{req}) => {
        if(value != req.body.password){
            return false
        }
        return true
    })
    .withMessage("Las constraseñas no coiciden"),
    check('bases')
    .isString("on")
    .withMessage("Debes aceptar las bases y condiciones")
];

module.exports= register;