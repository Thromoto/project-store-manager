const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { salesService } = require('../../../src/services');
const { salesController } = require('../../../src/controllers');

const { salesListMock } = require('./mocks/sales.controller.mock');

describe('Teste de unidade do salesController', function () {
  describe('Listando a lista Sales', function () {
    it('Deve retornar o status 200 e a lista', async function () {
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(salesService, 'getSales').resolves({ type: null, message: salesListMock });

      await salesController.getSales(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(salesListMock);
    });
  });

  afterEach(function () {
    sinon.restore();
  });
});
