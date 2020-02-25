// Hello Node.js (use debug method)
// Node.js is great!! (use info method)
// Warning, Warning, I think we have a Warning (use warn method)
// Mayday Mayday, we have an errro, repeat.. we have an error (use error method)

const Logger = require('logplease');
const logger1 = Logger.create('controller');
const logger2 = Logger.create('models');

logger1.debug(`Hello Node.js controllers`);
logger2.debug(`Hello Node.js models`);
logger1.info('Node.js is great!!');
logger1.warn('Warning, Warning, I think we have a Warning ');
logger1.error('Mayday Mayday, we have an errro, repeat.. we have an error');