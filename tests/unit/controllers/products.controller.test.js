const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { productsService } = require('../../../src/services');
const { productsController } = require('../../../src/controllers');

const { productsMockerList } = require('./mocks/products.controller.mock');

describe('Teste de unidade do productsController', function () {
  describe('Listando os produtos', function () {
    it('Deve retornar o status 200 e a lista', async function () {
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(productsService, 'getProducts').resolves({ type: null, message: productsMockerList });

      await productsController.getProducts(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(productsMockerList);
    });
  });

  afterEach(function () {
    sinon.restore();
  });
});
