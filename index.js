require('dotenv').config();

module.exports = {
    init: require('./lib/init'),
    setup: require('./lib/setup'),
    listAll: require('./lib/listAll'),
    keyVault: require('./lib/key-vault')
};
