const productsMocker = [
  {
    name: 'Martelo de Thor',
  },
];

const newProductsMocker = { id: 1, ...productsMocker };

const productsMockerList = [newProductsMocker];

module.exports = {
  productsMocker,
  newProductsMocker,
  productsMockerList,
};