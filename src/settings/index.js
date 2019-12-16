const nconf = require('nconf');

nconf.env().defaults(require('./default.json'));

export default nconf;
