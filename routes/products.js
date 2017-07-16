const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', function(req, res) {
  res.render('index', { topProd: db.getMaxRating().name });
});

router.get('/products', function(req, res) {
  res.render('products', {
    products: db.getProducts(),
    topProd: db.getMaxRating().name
  });
});

// router.get('/products/:id', function(req, res) {});
// router.post('/products', function(req, res) {});
// router.delete('/products/:id', function(req, res) {});

module.exports = router;
