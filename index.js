const express = require("express");
const cors = require("cors");
const db = require("./config/db");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/productos", require("./routes/producto.routes"));

db.sync().then(() => {
  app.listen(process.env.PORT, () => console.log("Servidor arriba"));
});
