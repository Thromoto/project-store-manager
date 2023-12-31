const productsService = require('../services/products.service');

const getProducts = async (_req, res) => {
  const { type, message } = await productsService.getProducts();

  if (type) return res.status(404).json({ message: 'Product not found' });

  return res.status(200).json(message);
};

const getProductsById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.getProductsById(id);

  if (type) return res.status(404).json({ message: 'Product not found' });

  return res.status(200).json(message);
};

const createProduct = async (req, res) => {
  const { name } = req.body;

  const { type, message } = await productsService.insertProduct(name);

  if (type) return res.status(400).json({ message: 'INVALID_VALUE' });

  res.status(201).json(message);
};

const updateProduct = async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;

  const { type, message } = await productsService.updateProduct(id, name);

  if (type) {
    return res.status(type).json({ message });
  }

  return res.status(200).json(message);
};

const removeProduct = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.removeProduct(id);

  if (type) return res.status(type).json({ message });

  res.status(204).json({ message });
};

module.exports = {
  getProducts,
  getProductsById,
  createProduct,
  updateProduct,
  removeProduct,
};
