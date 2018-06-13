const common = require('./common');
const config = common.config();
const mysql = require('mysql');


class DbConnection {

    constructor() {

        this.connection = mysql.createConnection({
            host: config.db.host,
            user: config.db.user,
            password: config.db.password,
            port: config.db.port,
            database: config.db.database
        });
    }

    getConnection() {
        return this.connection;
    }
}

module.exports = DbConnection;