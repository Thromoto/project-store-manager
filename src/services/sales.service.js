const salesModel = require('../models/sales.model');

const getSales = async () => {
  const allSales = await salesModel.getAll();

  return { type: null, message: allSales };
};

const getSalesById = async (id) => {
  const salesId = await salesModel.getSalesById(id);
  if (salesId.length === 0) return { type: 404, message: 'Sale not found' };
  return { type: null, message: salesId };
};

module.exports = {
  getSales,
  getSalesById,
};