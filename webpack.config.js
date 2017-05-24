var indice = (process.argv.indexOf('pro') > -1) ?
    process.argv.indexOf('pro') :
    (process.argv.indexOf('pre') > -1) ? process.argv.indexOf('pre') : process.argv.indexOf('test');

const enviroment = (indice > 0) ? process.argv[indice] : 'dev';

process.env.ENV === enviroment;

module.exports = require('./config/webpack.private.' + enviroment)