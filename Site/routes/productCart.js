var express = require('express');
var router = express.Router();

const productCartController =require('../controllers/productCartController')

/* GET home page. */
router.get('/',productCartController.cart);

module.exports = router;