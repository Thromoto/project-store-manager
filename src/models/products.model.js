const snakeize = require('snakeize');
const connection = require('./db/connection');

const getAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products',
  );
  return result;
};

const getProductsById = async (id) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = (?)',
    [id],
  );
  return result;
};

const insertProduct = async (product) => {
  const columns = Object.keys(snakeize(product)).join(', ');

  const placeholders = Object.keys(product)
    .map((_key) => '?')
    .join(', ');

  const [{ insertId }] = await connection.execute(
    `INSERT INTO StoreManager.products (${columns}) VALUE (${placeholders})`,
    [...Object.values(product)],
  );

  return insertId;
};

const removeProduct = async (id) => {
  await connection.execute(
    'DELETE FROM StoreManager.products WHERE id = (?)',
    [id],
  );
};

module.exports = {
  getAll,
  getProductsById,
  insertProduct,
  removeProduct,
};
