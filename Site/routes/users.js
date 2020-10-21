var express = require('express');
var router = express.Router();
const usersController =require('../controllers/usersController');
const registerValidator = require('../validations/userRegister');
const loginValidator = require('../validations/userLogin');
const logMiddleware = require('../middlewares/logMiddleware');


router.get('/login',(req,res) =>{
    res.render('login',{
        title:'BPLE Gaming - Login'
    })
});
router.post('/login', loginValidator ,usersController.login);

router.get('/register',(req,res) =>{
    res.render('register',{
        title:'BPLE Gaming - Registro'
    })
});
router.post('/register' ,registerValidator ,usersController.register);


router.get('/logout' ,usersController.logout)

router.get('/profile',logMiddleware ,usersController.profile)

router.put('/profile/:id', usersController.editUser)

router.get('/productlist', logMiddleware ,usersController.productList);
router.get('/productlist/:id',logMiddleware ,usersController.productAdmin)

module.exports = router;