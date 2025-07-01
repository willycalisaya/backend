const Producto = require("../models/producto");
exports.getAll = async (req, res) => {
  const productos = await Producto.findAll();
  res.json(productos);
};
exports.create = async (req, res) => {
  const producto = await Producto.create(req.body);
  res.json(producto);
};
exports.update = async (req, res) => {
  await Producto.update(req.body, { where: { id: req.params.id } });
  res.send("Actualizado");
};
exports.delete = async (req, res) => {
  await Producto.destroy({ where: { id: req.params.id } });
  res.send("Eliminado");
};