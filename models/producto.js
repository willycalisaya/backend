const { DataTypes } = require("sequelize");
const db = require("../config/db");

const Producto = db.define("Producto", {
  nomPro: DataTypes.STRING,
  precioProducto: DataTypes.FLOAT,
  stockProducto: DataTypes.INTEGER,
});

module.exports = Producto;
