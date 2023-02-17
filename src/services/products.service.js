const productsModel = require('../models/products.model');
const schema = require('./validations/validationsInputValues');

const getProducts = async () => {
  const allProducts = await productsModel.getAll();

  return { type: null, message: allProducts };
};

const getProductsById = async (id) => {
  const error = schema.validateId(id);
  if (error.type) return error;

  const productsId = await productsModel.getProductsById(id);
  if (!productsId) return { type: 'PRODUCT_NOT_FOUND', message: 'Product ID not found' };

  return { type: null, message: productsId };
};

const insertProduct = async (name) => {
  const error = schema.validateNewProduct(name);
  if (error.type) return error;

  const newProductId = await productsModel.insertProduct({ name });
  const newProduct = await productsModel.getProductsById(newProductId);

  return { type: null, message: newProduct };
};

const removeProduct = async (id) => {
  const hasProduct = await productsModel.getProductsById(id);
  if (!hasProduct) return { type: 404, message: 'Product not found' };

  await productsModel.removeProduct(id);

  return { type: 204, message: '' };
};

module.exports = {
  getProducts,
  getProductsById,
  insertProduct,
  removeProduct,
};
