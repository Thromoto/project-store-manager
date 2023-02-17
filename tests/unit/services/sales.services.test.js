const { expect } = require('chai');
const sinon = require('sinon');

const { salesModel } = require('../../../src/models');
const { salesService } = require('../../../src/services');

const { salesMock } = require('./mocks/sales.service.mock');

describe('Verificando service em Sales', function () {
  describe('Listagem de Sales', function () {
    it('retorna a lista completa em Sales', async function () {
      sinon.stub(salesModel, 'getAll').resolves(salesMock);
      const result = await salesService.getSales();

      expect(result.type).to.be.equal(null);
      expect(result.message).to.be.equal(salesMock);
    });
  });

  describe('Busca por um produto em Sales', function () {
    it('retorna um erro caso o Id seja invalido', async function () {
      const result = await salesService.getSalesById('');

      expect(result.type).to.be.equal(404);
      expect(result.message).to.be.equal('Sale not found');
    });
  });

  afterEach(function () {
    sinon.restore();
  });
});
