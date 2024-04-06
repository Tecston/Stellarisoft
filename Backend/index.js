const express = require('express');
const cors = require(`cors`);

const app = express()
const port = 3000

let arbolesArr = []

//#region 
app.use(
    express.urlencoded({
        extended:true
    })
)

app.use(express.json({
    type: "*/*"
}))

app.use(cors());
//#endregion

// Ruta para manejar solicitudes GET a /arboles
app.get(`/arboles`, (req, res) => {
    res.send(JSON.stringify(arbolesArr));
});

// Ruta para manejar solicitudes POST a /arboles
app.post(`/arboles`, (req, res) => {
    let arboles = req.body;
    arbolesArr.push(arboles)
    res.send(JSON.stringify("Guardado"));
    console.log(arbolesArr);
});

// Configura el servidor para escuchar en el puerto especificado
app.listen(port, () => {
    console.log(`Estoy en el puerto http://localhost:${port}`);
});
