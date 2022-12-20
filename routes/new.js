var express = require('express');
var router = express.Router();

/* GET new listing. */
router.get('/', function(req, res) {
  res.render('form');
});

module.exports = router;
