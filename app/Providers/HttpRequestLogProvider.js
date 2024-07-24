const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

class HttpRequestLogProvider {
    fileName = 'access.log';
    constructor(app) {
        fs.mkdirSync(`${Storage.path}/logs`, {recursive: true})
        this.log(app);
    }

    log(app) {
        var accessLogStream = fs.createWriteStream(path.join(Storage.path + "/logs", this.fileName), { flags: 'a' })
        app.use(morgan('combined', { stream: accessLogStream }))
    }
}

module.exports = HttpRequestLogProvider;