const mongoose = require ("mongoose");
const clienteSchema = mongoose.Schema({
        nombres: {type: String, maxLenght: 50, reqired: true, unique: false },
        apellidos: {type: String, maxLenght: 50, reqired: true, unique: false },
        documento: {type: Number, required: true, unique: true },
        telefono: {type: Number, required: true, unique: true },
        correo: {type: String, maxLenght: 50, reqired: true, unique: false },
        passw: {type: String, maxLenght: 50, reqired: true, unique: false },
     
});

module.exports = mongoose.model("cliente", clienteSchema);