var express = require('express');
const path = require('path')
var router = express.Router();
const productsController = require('../controllers/productsController')
const multer = require('multer')
const dbCategories = require('../data/dbCategories')
const uploadImageProduct = require('../middlewares/uploadImageProduct')
const logMiddleware = require('../middlewares/logMiddleware');


router.get('/', productsController.products);
router.get('/detail/:id', productsController.detail);
router.get('/cart', productsController.cart);
router.get('/search', productsController.search);

router.get('/add',logMiddleware ,(req, res) => {
    res.render('productRegister', {
        title: 'BPLE Gaming - Registro Producto',
        categories: dbCategories
    })
});
router.post('/add', uploadImageProduct.any(), productsController.add)

router.get('/edit/:id', logMiddleware, productsController.editForm);
router.put('/edit/:id', uploadImageProduct.any(), productsController.edit);

router.delete('/delete/:id', logMiddleware, productsController.delete)

module.exports = router;