const { Client } = require('pg');

runClient();

async function runClient() {
    // CONNECTION
    const client = new Client({
        user: 'postgres',
        host: '158.160.12.42',
        database: 'postgres',
        password: 'postgres',
        port: 5432,
        ssl: false,
    });

    client.connect();

    // INSERT
    await client.query('INSERT INTO customer(name, rank) VALUES($1, $2)', ['John', 3]);

    // UPDATE
    await client.query('UPDATE customer SET name = $1, rank = $2 WHERE id = 1', ['Sally', 15]);

    // SELECT (1 ROW)
    const countResult = await client.query('SELECT COUNT(*) FROM customer WHERE name <> $1', ['Leslie']);
    console.log('Count - ' + countResult.rows[0].count);

    // SELECT (MULTIPLE ROWS)
    const selectResult = await client.query('SELECT * FROM customer WHERE name <> $1', ['Leslie']);
    for (const row of selectResult.rows) {
        console.log(row);
    }

    client.end();
}