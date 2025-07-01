const express = require("express");
const cors = require("cors");
const sequelize = require("./config/db");
const app = express();
require("dotenv").config();
app.use(cors());
app.use(express.json());
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/productos", require("./routes/producto.routes"));
sequelize.sync().then(() => {
  app.listen(process.env.PORT, () => console.log("Servidor corriendo en puerto " + process.env.PORT));
});
