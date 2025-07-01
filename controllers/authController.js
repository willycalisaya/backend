const Usuario = require("../models/usuario");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.register = async (req, res) => {
  const { nombre, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 8);
  const usuario = await Usuario.create({ nombre, email, password: hashedPassword });
  res.json(usuario);
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const usuario = await Usuario.findOne({ where: { email } });
  if (!usuario) return res.status(401).send("Email incorrecto");
  const valid = await bcrypt.compare(password, usuario.password);
  if (!valid) return res.status(401).send("Contraseña incorrecta");
  const token = jwt.sign({ id: usuario.id }, process.env.SECRET_JWT);
  res.json({ token });
};
