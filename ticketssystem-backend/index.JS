const express = require ("express");
const morgan = require ("morgan");
const cors = require ("cors");
const mongoose = require ("./conexion")

const app =express();
const  env = process.env;
const port = env.PORT || 8080;
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.listen(port, ()=>{
    console.log("API iniciado en el puerto" +port);
});

app.get("/", (request, response)=>{
    response.send("API Iniciado");
});
app.use("/cliente", require("./rutas/ClienteRutas"));
