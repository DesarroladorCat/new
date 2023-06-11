const ClienteModelo = require ("./modelos/ClienteModelo")
const clienteOperaciones = {}

clienteOperaciones.crearCliente = async (req, res)=>{

}
clienteOperaciones.buscarCliente = async (req,res)=>{
    try {
        const listaclientes = await ClienteModelo.find();
        res.status (200).send(listaclientes);
    } catch (error){
        res.status(400).send("Mala Peticion")
    }
}
clienteOperaciones.modificarCliente = async (req, res)=>{
}

module.exports = clienteOperaciones;
