const express = require('express');
const productsController = require('../controllers/products.controller');
const { validateName } = require('../middlewares/validateProduct');

const productsRouter = express.Router();

productsRouter.get('/', productsController.getProducts);

productsRouter.get('/:id', productsController.getProductsById);

productsRouter.post('/', validateName, productsController.createProduct);

productsRouter.put('/:id', validateName, productsController.updateProduct);

productsRouter.delete('/:id', productsController.removeProduct);

module.exports = productsRouter;