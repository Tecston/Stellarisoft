const { Client } = require ('pg');
    
const obtenerArboles = async () => {
    const client = new Client({
        user: 'postgres',
        host: 'localhost',
        database: 'Arboles',
        password: 'medina',
        port: 5432,
    });
    
    
    await client.connect()
    
    const res = await client.query('SELECT * FROM arboles;')

    const result = res.rows[0].message;

    await client.end()
    
    return result;
};

obtenerArboles().then((result) => {
    console.log(result);
});