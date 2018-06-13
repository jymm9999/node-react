const DbConnection = require('./dbconnection');

class PersonRepository {

    constructor() {

        let dbConnection = new DbConnection();
        this.connection = dbConnection.getConnection();
    }

    selectTestQuery() {

        this.connection.query('SELECT * from Persons', function (err, rows, fields) {
            if (!err)
                console.log('The solution is: ', rows);
            else
                console.log('Error while performing Query.', err);
        });
    }
}

module.exports = PersonRepository;