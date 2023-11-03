var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('animal', { title: 'Search results animal' });
});

module.exports = router;
