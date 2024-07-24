### ABOUT ExpressMVC
ExpressMVC is a scaffold for the Express.js framework that utilizes the MVC architecture. It aims to simplify the development of RESTful APIs for web-based applications. ExpressMVC eases the development process by handling common tasks used in many web applications. This scaffold includes:

- A simple and effective routing system
- Logging for debugging
- Database schema migration and ORM support with Sequelize
- Password hashing, token/session management, and authentication verification

DEVELOPMENT GUIDE

```shell
$ git clone https://github.com/Raza9798/ExpressMVC.git
$ cp .env.example .env
$ npm install
```

SETUP DATABASE CONNECTIVITY

```shell
# config/config.json
"development": {
    "username": "root",
    "password": null,
    "database": "test",
    "host": "127.0.0.1",
    "dialect": "mysql"
},
```

TABLES MIGRATION AND SEEDING
```shell
$ npx sequelize-cli db:migrate  
$ npx sequelize-cli db:seed:all
```

STARTING DEVELOPMENT SEVER
```shell
$ npm run start
```