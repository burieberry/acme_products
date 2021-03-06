const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const path = require('path');
const swig = require('swig');
const db = require('./db');
swig.setDefaults({ cache: false });

const app = express();
app.set('view engine', 'html');
app.engine('html', swig.renderFile);

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ exdended: false }));
app.use(methodOverride('_method'));

app.use(function(req, res, next) {
  res.on('finish', function() {
    console.log(req.method, req.url, res.statusCode);
  });
  next();
});

app.get('/', function(req, res, next) {
  res.render('index', { topProd: db.getMaxRating() });
});

app.use('/products', require('./routes/products'));

app.use(function(err, req, res, next) {
  res.render('error', { error: err });
});

app.use(function(req, res, next) {
  res.render('error'); // fallback for 404
});

const port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
