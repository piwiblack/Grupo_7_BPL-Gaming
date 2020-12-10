var express = require('express');
var router = express.Router();
const { check, validationResult, body } = require('express-validator')
let db = require('../database/models')

module.exports = [
    check('name').isLength({min:5}).withMessage('El nombre del producto debe tener al menos 5 caracteres'),
    body('name').custom((value) =>{
        return db.Products.findOne({
            where: {
                name: value
            }
        })
        .then(user => {
            if(user){
                return Promise.reject('Ya existe un producto con este nombre')
            }
        })
    }),
    check('price').isLength({min:1}).withMessage('El precio no puede estar vacio'),
    check('price').isNumeric().withMessage('El precio debe ser un numero'),
    check('description').isLength({min:20}).withMessage('La descripcion del producto debe tener al menos 20 caracteres'),
    body('images')
    .custom((value,{req})=>{
        if(!req.files[0]){
            return false
        }else{
            return true
        }
    })
    .withMessage("Debe subir una imagen"),
    check('warranty').isLength({min:1}).withMessage('Debe ingresar la garantia')
];
