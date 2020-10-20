const { check, validationResult, body } = require('express-validator')
const db = require('../database/models');
const bcrypt = require('bcrypt')


module.exports = [
    check('email').isEmail().withMessage('El email ingresado no es valido'),
    check('password')
    .isLength({
        min:1
    })
    .withMessage("Escribe tu contraseña"),
    body('password').custom(function(value,{req}){
        return db.Users.findOne({
            where: {
                email: req.body.email
            }
        })
        .then(user =>{
            if(!bcrypt.compareSync(value, user.password)){
                return Promise.reject('Credenciales invalidas')
            }
        })
        .catch(err =>{
            return Promise.reject('Credenciales invalidas')
        })
    })
];

