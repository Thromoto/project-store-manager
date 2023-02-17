const { expect } = require('chai');
const sinon = require('sinon');
const { salesModel } = require('../../../src/models');

const connection = require('../../../src/models/db/connection');
const { sales } = require('./mocks/sales.model.mock');

describe('Teste a unidade model em sales', function () {
  it('Recuperando a lista de sales', async function () {
    sinon.stub(connection, 'execute').resolves([sales]);
    const result = await salesModel.getAll();
    expect(result).to.be.deep.equal(sales);
  });

  // it('Recuperando o produto a partir do id', async function () {
  //   sinon.stub(connection, 'execute').resolves([[sales[0]]]);
  //   const result = await salesModel.getSalesById(1);
  //   expect(result).to.be.deep.equal(sales[0]);
  // });

  afterEach(function () {
    sinon.restore();
  });
})
