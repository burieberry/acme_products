const router = require('express').Router();
const db = require('../db');

router.get('/', function(req, res) {
  res.render('products', {
    products: db.getProducts()
  });
});

router.get('/:id', function(req, res) {
  var id = req.params.id;
  res.render('product', {
    product: db.getProduct(id * 1)
  });
});


// router.post('/products', function(req, res) {});
// router.delete('/products/:id', function(req, res) {});

module.exports = router;
