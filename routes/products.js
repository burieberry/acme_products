const router = require('express').Router();
const db = require('../db');

router.get('/', function(req, res) {
  res.render('products', {products: db.getProducts()});
});

router.get('/:id', function(req, res) {
  res.render('product', {product: db.getProduct(req.params.id * 1)});
});

router.post('/', function(req, res) {
  db.createProduct(req.body);
  res.redirect('/products');
});

// router.delete('/products/:id', function(req, res) {});

module.exports = router;
