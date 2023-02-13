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

module.exports = {
  getProducts,
  getProductsById,
  insertProduct,
};
