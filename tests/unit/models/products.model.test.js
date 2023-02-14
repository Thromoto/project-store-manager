const { expect } = require('chai');
const sinon = require('sinon');
const { productsModel } = require('../../../src/models');

const connection = require('../../../src/models/db/connection');
const { products } = require('./mocks/products.model.mock');

describe('Teste a unidade model em produtos', function () {
  it('Recuperando a lista de produtos', async function () {
    sinon.stub(connection, 'execute').resolves([products]);
    const result = await productsModel.getAll();
    expect(result).to.be.deep.equal(products);
  });

  it('Recuperando o produto a partir do id', async function () {
    sinon.stub(connection, 'execute').resolves([[products[0]]]);
    const result = await productsModel.getProductsById(1);
    expect(result).to.be.deep.equal(products[0]);
  });

  afterEach(function () {
    sinon.restore();
  });
});
