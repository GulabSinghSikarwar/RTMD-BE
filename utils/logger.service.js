const fs = require('fs');
const path = require('path');
const winston = require('winston');
let Logger;

const getLogger = () => {
    const logsDirectory = path.join(__dirname, '../logs');
    if (!fs.existsSync(logsDirectory)) {
        fs.mkdirSync(logsDirectory, { recursive: true });
    }
    const timestamp = new Date().toISOString().replace(/:/g, '-');
    // const randomString = crypto.randomBytes(6).toString('hex');
    const fileName = `log_${timestamp}.log`;
    const logger = winston.createLogger({
        level: 'info',
        format: winston.format.json(),
        transports: [
            new winston.transports.Console(),
            new winston.transports.File({
                filename: fileName,
                dirname: logsDirectory,
            }),
            new winston.transports.File({
                filename: 'error_' + fileName,
                dirname: logsDirectory,
                level: 'error'
            }),
            // new winston.transports.File({ filename: 'logs.txt', dirname: filePath }),

        ],
    });
    return logger;
}

module.exports = { getLogger };