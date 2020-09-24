const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');



router.get('/register',userController.register);
router.post('/register', userController.registerProcess);

router.get('/login',userController.login);
router.post('/login', userController.loginProcess);

router.get('/profile',userController.profile);

module.exports = router;