const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Producto = sequelize.define("Producto", {
  nomPro: DataTypes.STRING,
  precioProducto: DataTypes.FLOAT,
  stockProducto: DataTypes.INTEGER,
});
module.exports = Producto;

