const express = require('express');
const path = require('path');
const router = express.Router();
const multer= require('multer');
const productController =require('../controllers/productController')


// MULTER
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images/products')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
var upload = multer({ storage: storage });
  // End Multer

router.get('/', productController.list);
router.get('/category', productController.category)
router.get('/detail/:id',productController.detail);
router.get('/search', productController.search)
router.get('/cart',productController.cart);
router.get('/add',productController.productAdd);
router.post('/add',upload.any(),productController.proccessAdd);
router.get('/edit/:id', productController.edit)
router.put('/edit/:id',upload.any(), productController.proccessEdit);
router.delete('/delete/:id', productController.delete);

module.exports = router;