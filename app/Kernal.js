require('dotenv/config');
const cors = require('cors');
const express = require('express');
const formidable = require('express-formidable');
const FileSystemDriver = require('#config/FileSystemDriver.json');
const HttpRequestLogProvider = require('#providers/HttpRequestLogProvider.js');
const DebugLoggerProvider = require('#providers/DebugLoggerProvider.js');
const router = require('#routes/web.js');
class Kernal {
    constructor(app) {
        this.app = app;
        this.initGlobalVariables();
        this.initMain();
        this.initExpress();
        this.loadWebRoutes();
        this.handleUndefinedRoutes();
    }

    initGlobalVariables() {
        global.app = this.app;
        global.Storage = FileSystemDriver['disks'][FileSystemDriver['default']];
        global.Log = (new DebugLoggerProvider(this.app)).inititate();
    }

    initMain() {
        new HttpRequestLogProvider(this.app);
    }

    initExpress(){
        this.app.use(cors({ // Cross-Origin Resource Sharing
            origin: '*',
            methods: ['GET', 'POST', 'PUT', 'DELETE'],
        }));
        this.app.use(express.json()); // For parsing application/json
        this.app.use(formidable({   // For parsing form-data
            encoding: 'utf-8',
            uploadDir: '/storage',  // upload directory
            multiples: true         // To support multiple file uploads
        }));
    }

    loadWebRoutes() {
        this.app.use('/', router);
    }

    handleUndefinedRoutes() {
        this.app.use((req, res, next) => {
            res.status(404).send({ error: 'This page is not available' });
        });
    }
}

module.exports = Kernal