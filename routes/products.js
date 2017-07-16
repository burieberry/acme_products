const router = require('express').Router();
const db = require('../db');

router.get('/', function(req, res) {
  res.render('products', {
    products: db.getProducts()
  });
});

// router.get('/:id', function(req, res) {});


// router.post('/products', function(req, res) {});
// router.delete('/products/:id', function(req, res) {});

module.exports = router;
