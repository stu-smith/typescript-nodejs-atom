import chalk = require('chalk');
import winston = require('winston');

import U = require('./util');

const logger: winston.LoggerInstance = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)({ 'timestamp': true })
    ]
});

const lineWidth: number = 120;
const errorStyle: Chalk.ChalkChain = chalk.red.bold;
const subtitleStyle: Chalk.ChalkChain = chalk.bold;

export function subtitle(msg: string): void {
    info(subtitleStyle(msg).toString());
    info(subtitleStyle(U.repeatStr('-', lineWidth)).toString());
}

export function info(msg: string): void {
    if (process.env.NODE_ENV === 'test') {
        return;
    }
    logger.info('[i] ' + msg);
}

export function error(msg: string): void {
    if (process.env.NODE_ENV === 'test') {
        return;
    }
    logger.info(errorStyle('[E] ' + msg).toString());
}
