// PostgreSQL example for Node.js
//

(function() {

    // Example code from: https://node-postgres.com/api/pool

    const process = require("process");
    const { Pool } = require("pg");

    const connectionString = process.env["DATABASE_URL"];
    console.log(`DATABASE_URL="${connectionString}"`);

    const pool = new Pool({ connectionString });

    let response = { error: null, result: null };

    pool.connect((err, client, release) => {
        if (err) {
            response.error = `Error acquiring client ${err.stack}`;
            console.error(response.error);
            return;
        }
        client.query('SELECT NOW()', (err, result) => {
            release();
            if (err) {
                response.error = `Error executing query ${err.stack}`;
                console.error(response.error);
                return;
            }
            response.result = `Result of executing query ${result.rows}`;
            console.log(response.result);
            return;
        })
    });

    module.exports = function() { return response; }

})();
