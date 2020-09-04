var express = require('express');
var router = express.Router();

const productRegisterController =require('../controllers/productRegisterController')

/* GET home page. */
router.get('/',productRegisterController.productRegister);

module.exports = router;