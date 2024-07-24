const LoginController = require('#app/Controller/auth/AuthenticationController.js');
const express = require('express');
const router = express.Router();

router.post('/login', LoginController.login);
router.post('/register', LoginController.register);
module.exports = router;