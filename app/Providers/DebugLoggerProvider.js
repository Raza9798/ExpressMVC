
const moment = require('moment');
const winston = require('winston');

class DebugLoggerProvider {
    inititate() {
        const Log = winston.createLogger({
            level: 'info',
            format: winston.format.json(),
            defaultMeta: { time: moment().format('MMMM Do YYYY, h:mm:ss a') },
            transports: [
                new winston.transports.File({ filename: `${Storage.path}/logs/express.log`, level: 'debug' }),
            ],
        });

        Log.add(new winston.transports.Console({
            format: winston.format.simple(),
        }));
        return Log;
    }

}

module.exports = DebugLoggerProvider;