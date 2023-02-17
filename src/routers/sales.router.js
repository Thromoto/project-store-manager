const express = require('express');
const salesController = require('../controllers/sales.controller');

const salesRouter = express.Router();

salesRouter.get('/', salesController.getSales);

salesRouter.get('/:id', salesController.getSalesById);

module.exports = salesRouter;