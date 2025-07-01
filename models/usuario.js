const { DataTypes } = require("sequelize");
const db = require("../config/db");

const Usuario = db.define("Usuario", {
  nombre: DataTypes.STRING,
  email: { type: DataTypes.STRING, unique: true },
  password: DataTypes.STRING,
});

module.exports = Usuario;
