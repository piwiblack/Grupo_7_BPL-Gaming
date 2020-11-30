var express = require('express');
var router = express.Router();
const { check, validationResult, body } = require('express-validator')
let db = require('../database/models')

const product = [
    check('name').isLength({min:5}).withMessage('El nombre del producto debe tener al menos 5 caracteres'),
    check('price').isLength({min:1}).withMessage('El precio no puede estar vacio'),
    check('price').isNumeric().withMessage('El precio debe ser un numero'),
    check('description').isLength({min:20}).withMessage('La descripcion del producto debe tener al menos 20 caracteres'),
    check('warranty').isLength({min:1}).withMessage('Debe ingresar la garantia')
];

module.exports= register;