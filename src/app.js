const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express();

//const routerApi = require('./routes/index'); // Cambiar la importación para que coincida con la estructura de tus rutas

const port = process.env.PORT || 8080;

const routerApi = require('./routes');

app.use(cors());
app.use(express.json());

app.get('/', (req,res) => {
    res.send('Backend con NodeJS - Express + CRUD API REST + PostgreSQL'); // Actualizar el mensaje si lo deseas
});

routerApi(app);

app.listen(port,()=>{
    console.log("Servidor corriendo en el puerto:", port); // Actualizar el mensaje si lo deseas
});
