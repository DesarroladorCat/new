const mongoose = require ("mongoose");

const username = "admin";
const password = "admin";
const database ="TicketsSystem";
const URI = "mongodb+srv://"username+":"+password+";

const conectar = async ()=>{
    try {
        await mongoose.connect(URI);
        console.log("Atlas esta en linea");
    }  catch (error) {
        console.log ("Error de conexion." +error);
    }
}
conectar ();
module.exports = mongoose;