const ClienteOperaciones = require ("../operaciones/ClienteOperaciones");
const router = requuire("express").router();

router.get("/", ClienteOperaciones.buscarCliente);

module.exports = router;