var express = require('express');
var router = express.Router();
const productsController = require('../controllers/productsController')
const uploadImageProduct = require('../middlewares/uploadImageProduct')
const productValidator = require('../validations/productValidator')
const logMiddleware = require('../middlewares/logMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');


router.get('/', productsController.listProducts);
router.get('/detail/:id', productsController.detail);
router.get('/cart', productsController.cart);
router.get('/search', productsController.search);

router.get('/productlist/search', productsController.searchAdmin);


router.get('/add', logMiddleware ,adminMiddleware, productsController.addForm);
router.post('/add', uploadImageProduct.any(),productValidator, productsController.addProduct)

router.get('/edit/:id', adminMiddleware, productsController.editForm);
router.put('/edit/:id', uploadImageProduct.any(),productValidator, productsController.editProduct);

router.get('/productlist', logMiddleware, adminMiddleware, productsController.productList);
router.get('/productlist/:id',logMiddleware, adminMiddleware ,productsController.productAdmin)

router.delete('/delete/:id', logMiddleware, productsController.delete)

module.exports = router;