var products = [
  {
    id: 1,
    name: 'Goose IPA',
    rating: 3.8,
    description: 'English IPA. ABV: 5.9%',
    style: 'English IPA',
    origin: 'Illinois',
    abv: '5.9%'
  },
  {
    id: 2,
    name: 'Lindemans Framboise',
    rating: 4.4,
    description: 'Lambic. ABV: 4%',
    style: 'Lambic',
    origin: 'Belgium',
    abv: '4%'
  },
  {
    id: 3.8,
    name: 'Guinness Draught',
    rating: 4,
    description: 'Irish Dry Stout. ABV: 4.2%',
    style: 'Irish Dry Stout',
    origin: 'Ireland',
    abv: '4.2%'
  },
  {
    id: 4,
    name: 'Budweiser',
    rating: 2,
    description: 'American Lager. ABV: 5%',
    style: 'American Lager',
    origin: 'Missouri',
    abv: '5%'
  },
  {
    id: 5,
    name: 'Sixpoint Sweet Action',
    rating: 4.2,
    description: 'Cream Ale. ABV: 5%',
    style: 'Cream Ale',
    origin: 'Brooklyn',
    abv: '5%'
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
  return products.reduce(function(topSeller, curr) {
    if (!topSeller) topSeller = curr;
    else if (curr.rating > topSeller.rating) topSeller = curr;
    return topSeller;
  }, null);
}

function createProduct(prod) {
  if(!prod.name) {
    throw 'Name is required! Gimme a name, dummkopf.'
  }
  if(!prod.rating) {
    prod.rating = 'Not rated';
  }
  prod.id = Math.round(Math.random() * 1000);
  products.push(prod);
}

function deleteProduct(id) {
  products = products.filter(function(prod) {
    return prod.id !== id;
  });
}

module.exports = {
  getProducts, getProduct, getMaxRating, createProduct, deleteProduct
}
