const express = require('express');
const router = express.Router();

const _VerifyAuthentication = require('#app/Middleware/VerifyAuthentication.js');
const _GuestRoute = require('#routes/modules/GuestRoute.js');
const _UserRoute = require('#routes/modules/UserRoute.js');
const _Auth = require('#routes/modules/auth/Auth.js');

router.use(_Auth);
router.use(_GuestRoute);

router.use(_VerifyAuthentication.verifyToken);
router.use(_VerifyAuthentication.sessionTokenVerification);
router.use(_UserRoute)

module.exports = router;