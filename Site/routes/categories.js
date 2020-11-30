var express = require('express');
var router = express.Router();
const categoriesController =require('../controllers/categoriesController');
const registerValidator = require('../validations/userRegister');
const loginValidator = require('../validations/userLogin');
const logMiddleware = require('../middlewares/logMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');

router.get('/categorieslist/search', categoriesController.search);
router.get('/categorieslist', logMiddleware, adminMiddleware, categoriesController.listCategories);
router.get('/categorieslist/:id',logMiddleware, adminMiddleware ,categoriesController.categorieAdmin)

router.put('/categorieslist/:id', categoriesController.saveCategorie)

router.get('/add',logMiddleware ,adminMiddleware, categoriesController.addForm);
router.post('/add', categoriesController.addCategory)



module.exports = router;