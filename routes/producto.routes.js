const express = require("express");
const controller = require("../controllers/productosController");
const auth = require("../middleware/authMiddleware");
const router = express.Router();

router.use(auth); // proteger todas las rutas
router.get("/", controller.getAll);
router.post("/", controller.create);
// etc...

module.exports = router;
