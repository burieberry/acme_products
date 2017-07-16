const express = require('express');
const swig = require('swig');
const db = require('./db');
swig.setDefaults({ cache: false });

const app = express();
app.set('view engine', 'html');
app.engine('html', swig.renderFile);

app.use(express.static('public'));

app.use(function(req, res, next) {
  console.log(req.method, req.url);
  next();
});

app.get('/', function(req, res) {
  res.render('index', { topProd: db.getMaxRating().name });
});

app.use('/products', require('./routes/products'));

app.use(function(req, res, next) {
  res.send('This page does not exist.'); // fallback for 404 pages
});

const port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
