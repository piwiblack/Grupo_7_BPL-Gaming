const express = require('express');
const router = express.Router();

const productController =require('../controllers/productController')

router.get('/', productController.list);
router.get('/category', productController.category)
router.get('/detail/:id',productController.detail);
router.get('/search', productController.search)
router.get('/cart',productController.cart);
router.get('/add',productController.productAdd);
router.post('/add', productController.publicar);
router.put('/edit/:id', productController.edit);
router.delete('/delete/:id', productController.delete);

module.exports = router;