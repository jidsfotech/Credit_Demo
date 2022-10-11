require('ts-node/register');
import config from './src/config/config';

/**
 * Database settings.
 *
 * Setting the db settings in knexfile allows us to make use of the migrations.
 *
 * @type {Object} Database settings
 * 
 */
const env = process.env.NODE_ENV;
let db_conn
if (env === 'test') {
    db_conn = config.mysql.connection.test;
}
if (env === 'dev') {
    db_conn = config.mysql.connection.dev;
}
else {
    db_conn = config.mysql.connection.prod
}
module.exports = {
    client: 'mysql',
    connection: db_conn,
    migrations: {
        tableName: 'migrations',
    },
    seeds: {
        directory: './seeds'
    },
    timezone: 'UTC',
    debug: true
};
