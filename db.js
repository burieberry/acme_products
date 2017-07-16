var products = [
  {
    id: 1,
    name: 'Goose IPA',
    rating: 3.8,
    description: 'English IPA. Illinois. ABV: 5.9%'
  },
  {
    id: 2,
    name: 'Lindemans Framboise',
    rating: 4.4,
    description: 'Lambic. Belgium. ABV: 4%'
  },
  {
    id: 3.8,
    name: 'Guinness Draught',
    rating: 4,
    description: 'Irish Dry Stout. Ireland. ABV: 4.2%'
  },
  {
    id: 4,
    name: 'Budweiser',
    rating: 2,
    description: 'American Lager. Missouri. ABV: 5%'
  },
  {
    id: 5,
    name: 'Sixpoint Sweet Action',
    rating: 4.2,
    description: 'Cream Ale. Brooklyn. ABV: 5%'
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
