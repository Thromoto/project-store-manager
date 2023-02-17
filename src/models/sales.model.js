const camelize = require('camelize');
const connection = require('./db/connection');

const getAll = async () => {
  const [result] = await connection.execute(
    `SELECT SP.sale_id, SL.date, SP.product_id, SP.quantity
    FROM StoreManager.sales AS SL
    INNER JOIN StoreManager.sales_products AS SP
    ON SL.id = SP.sale_id
    ORDER BY SP.sale_id ASC, SP.product_id ASC`,
  );
  return camelize(result);
};

const getSalesById = async (id) => {
  const [result] = await connection.execute(
    `SELECT SL.date, SP.product_id, SP.quantity 
    FROM StoreManager.sales AS SL
    INNER JOIN StoreManager.sales_products AS SP ON SL.id = SP.sale_id
    WHERE id = (?)
    ORDER BY SP.sale_id ASC, SP.product_id ASC`,
    [id],
  );
  return camelize(result);
};

module.exports = {
  getAll,
  getSalesById,
};