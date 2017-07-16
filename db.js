var products = [
  {
    id: 1,
    name: 'Bazz',
    rating: 4,
    description: 'Bazz up yo life!'
  },
  {
    id: 2,
    name: 'Foo',
    rating: 2.5,
    description: 'What da foo?'
  },
  {
    id: 3,
    name: 'Bar',
    rating: 5,
    description: 'I offer drinks!'
  },
  {
    id: 4,
    name: 'Whiskey',
    rating: 4.9,
    description: 'Popular alcoholic beverage.'
  },
  {
    id: 5,
    name: 'Beer',
    rating: 4.8,
    description: 'Booze'
  }
];

function getProducts() {
  return products;
}

function getProduct(id) {
  return products.filter(function(prod) {
    return prod.id === id;
  })[0];
}

function getMaxRating() {
  var max = products.reduce(function(acc, curr) {
    return Math.max(acc, curr.rating);
  }, 0);

  return products.filter(function(prod) {
    return prod.rating === max;
  })[0];
}

function createProduct(prod) {
  if(!product.name) {
    throw 'Name is required! Gimme a name, dummkopf.'
  }
  prod.id = Math.round(Math.random() * 1000);
  products.push(prod);
}

function deleteProduct(id) {
  products = products.filter(function(prod) {
    return prod.id === id;
  });
}

module.exports = {
  getProducts, getProduct, getMaxRating, createProduct, deleteProduct
}
