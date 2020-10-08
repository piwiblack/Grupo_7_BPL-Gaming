const express = require('express');
const router = express.Router();
const multer= require('multer');
const userController = require('../controllers/userController.js');




// MULTER
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images/users')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
var upload = multer({ storage: storage });
  // End Multer


router.get('/register',userController.register);
router.post('/register', upload.any(),userController.registerProccess);

router.get('/login',userController.login);
router.post('/login', userController.loginProccess);

router.get('/profile',userController.profile);
router.put('/editProfile',userController.editProccess)

module.exports = router;