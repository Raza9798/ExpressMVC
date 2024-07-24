const express = require('express');
const Kernal = require('#app/Kernal.js');
const app = express();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

new Kernal(app);

// Middleware for JWT validation
const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  jwt.verify(token, 'secret', (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    req.user = decoded;
    next();
  });
};

app.listen(process.env.PORT, () =>
  console.log(`${process.env.APP_NAME} listening on port ${process.env.PORT}`),
);