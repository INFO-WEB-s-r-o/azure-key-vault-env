const client = require('./key-vault');

/**
 * Load all environment variables from key-vault.
 *
 * @param underscoreReplacedBy
 * @returns {Promise<void>}
 */
async function listAll () {

    //const underscoreReplacedBy = '0x';
    try {

        for await (let secretProperties of client.listPropertiesOfSecrets()) {

            console.log('Secret properties: ', secretProperties);

        }

    } catch (err) {

        console.log('Error: ', err);

    }

}

module.exports = listAll;
