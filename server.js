const express = require('express');
const swig = require('swig');
const db = require('./db');
const routes = require('./routes/products');
swig.setDefaults({ cache: false });

const app = express();
app.set('view engine', 'html');
app.engine('html', swig.renderFile);

app.use(express.static('public'));

app.use(function(req, res, next) {
  console.log(req.method, req.url);
  next();
});

app.use('/', routes);

app.use(function(req, res, next) {
  res.send('This page does not exist.'); // fallback for 404 pages
});

const port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
