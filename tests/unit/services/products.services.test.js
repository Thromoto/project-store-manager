const { expect } = require('chai');
const sinon = require('sinon');
const { productsService } = require('../../../src/services');
const { productsModel } = require('../../../src/models');

const { allProducts } = require('./mocks/products.service.mock');

describe('Verificando o service dos produtos', function () {
  describe('Lista de produtos', function () {
    it('Retorna a lista completa de produtos', async function () {
      sinon.stub(productsModel, 'getAll').resolves(allProducts);
      const result = await productsService.getProducts();

      expect(result.type).to.be.equal(null);
      expect(result.message).to.deep.equal(allProducts);
    });
  });

  describe('Busca por um produto', function () {
    it('Retorna um erro se o id for inválido', async function () {
      const result = await productsService.getProductsById('a');

      expect(result.type).to.equal('INVALID_VALUE');
      expect(result.message).to.equal('"id" must be a number');
    });

    it('Retorna um erro caso o produto não exista', async function () {
      sinon.stub(productsModel, 'getProductsById').resolves(undefined);
      const result = await productsService.getProductsById(1);

      expect(result.type).to.equal('PRODUCT_NOT_FOUND');
      expect(result.message).to.equal('Product ID not found');
    });

    it('Retorna o produto caso o id exista', async function () {
      sinon.stub(productsModel, 'getProductsById').resolves(allProducts[0]);
      const result = await productsService.getProductsById(1);

      expect(result.type).to.equal(null);
      expect(result.message).to.equal(allProducts[0]);
    })
  });

  afterEach(function () {
    sinon.restore();
  });
});