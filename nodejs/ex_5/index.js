const Logger = require('logplease');
const logger = Logger.create('log');

const isEven = require('./numbers');
const numbers = [2, 3, 101, 201, 202, 100];
numbers.forEach(num=>{
    if (!isEven(num)) {
        logger.info(`${num} is even`);
    } else {
        logger.error(`${num} is odd`);
    }
});