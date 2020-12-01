var express = require('express');
var router = express.Router();
const usersController =require('../controllers/usersController');
const registerValidator = require('../validations/userRegister');
const loginValidator = require('../validations/userLogin');
const logMiddleware = require('../middlewares/logMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');
const uploadImageUser = require('../middlewares/uploadImageUser')
const authMiddleware = require ('../middlewares/authmiddleware');

router.get('/login',authMiddleware,(req,res) =>{
    res.render('login',{
        title:'BPLE Gaming - Login'
    })
});
router.post('/login', loginValidator ,usersController.login);

router.get('/userslist/search', usersController.search);

router.get('/register',authMiddleware,(req,res) =>{
    res.render('register',{
        title:'BPLE Gaming - Registro'
    })
});
router.post('/register', registerValidator ,usersController.register);


router.get('/logout', usersController.logout)

router.get('/profile', logMiddleware,usersController.profile)

router.put('/profile/:id',uploadImageUser.any(), usersController.editUser)

router.get('/userslist/addadmin/:id', logMiddleware, adminMiddleware ,usersController.addAdmin);

router.put('/userslist/addadmin/:id', usersController.saveAddAdmin)

router.get('/userslist', logMiddleware, adminMiddleware, usersController.usersList);
router.get('/userslist/:id',logMiddleware, adminMiddleware,  usersController.userProfile)



module.exports = router;