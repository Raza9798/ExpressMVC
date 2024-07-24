const jwt = require('jsonwebtoken');
const moment = require('moment');
class VerifyAuthentication {
    async verifyToken(req, res, next) {
        let token = req.headers['authorization'];
        if (!token) {
            return res.status(401).json({ message: 'unauthenticated' });
        }
        await next()
    }

    async sessionTokenVerification(req, res, next) {
        const token = req.headers['authorization'];
        jwt.verify(token, 'secret', (err, decoded) => {
            if (err) {
              return res.status(401).json({ error: 'Unauthorized' });
            }
            req.user = decoded;
            next();
          });
    }

}

module.exports = new VerifyAuthentication();