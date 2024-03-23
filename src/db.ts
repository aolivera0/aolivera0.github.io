import pg from 'pg';

export const prerender = false;

const client = new pg.Client({
    host: 'localhost',
    port: 5432,
    database: 'glossary',
    user: 'postgres',
    password: "123",
})

await client.connect();

export {client as db};