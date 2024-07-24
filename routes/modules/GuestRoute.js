const express = require('express');
const router = express.Router();
const GuestController = require('#app/Controller/GuestController.js');

router.get('/', GuestController.index);

module.exports = router;