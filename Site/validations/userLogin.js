const { check, validationResult, body } = require('express-validator')
const dbUsers = require('../data/dbUsers')


module.exports = [
    check('email').isEmail().withMessage('El email ingresado no es valido'),
    check('password')
    .isLength({
        min:1
    })
    .withMessage("Escribe tu contraseña")
];

