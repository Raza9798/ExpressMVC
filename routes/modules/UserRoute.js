const express = require('express');
const router = express.Router();
const UserController = require('#app/Controller/UserController.js');

router.get('/user/index', UserController.index);
router.get('/user/show/:id', UserController.show);
router.post('/user/store', UserController.store);
router.delete('/user/delete/:id', UserController.destroy);
router.put('/user/update/:id', UserController.update);

module.exports = router;