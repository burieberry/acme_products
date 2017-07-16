const express = require('express');
const router = express.Router();
const db = require('../db');

// router.get('/products/:id', function(req, res) {});
// router.get('/products', function(req, res) {});

router.get('/', function(req, res) {
  res.render('index', {
    products: db.getProducts(),
    topProd: db.getMaxRating().name
  });
});

// router.post('/products', function(req, res) {});
// router.delete('/products/:id', function(req, res) {});

module.exports = router;
