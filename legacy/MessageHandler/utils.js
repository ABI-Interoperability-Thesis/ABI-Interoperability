const mysql = require('mysql2');
let config = {
    host: 'mysql-db',
    user: 'admin',
    password: 'admin',
    database: 'abi-metadata',
    port: 3306
}


const UpdateRequest = async (req_id, answer) => {

    let connection = mysql.createConnection(config);

    // update statment
    let sql = `UPDATE client_requests
           SET answered = ?, answer = ?
           WHERE model_data_id = ?`;

    let data = [true, answer, req_id];

    // execute the UPDATE statement
    // execute the UPDATE statement
    connection.query(sql, data, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
        console.log('Rows affected:', results.affectedRows);
    });

    connection.end();
}

module.exports = {
    UpdateRequest: UpdateRequest
}