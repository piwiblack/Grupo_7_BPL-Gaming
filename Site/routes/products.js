var express = require('express');
var router = express.Router();
const productsController = require('../controllers/productsController')
const uploadImageProduct = require('../middlewares/uploadImageProduct')
const logMiddleware = require('../middlewares/logMiddleware');


router.get('/', productsController.listProducts);
router.get('/detail/:id', productsController.detail);
router.get('/cart', productsController.cart);
router.get('/search', productsController.search);

router.get('/add',logMiddleware , productsController.addForm);
router.post('/add', uploadImageProduct.any(), productsController.addProduct)

router.get('/edit/:id', logMiddleware, productsController.editForm);
router.put('/edit/:id', uploadImageProduct.any(), productsController.editProduct);

router.delete('/delete/:id', logMiddleware, productsController.delete)

module.exports = router;