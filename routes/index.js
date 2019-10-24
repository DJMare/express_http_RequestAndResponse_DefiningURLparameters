var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
//req.query defines the parameters within the URL which you can then use on the page. Here you define a name of a person within the URL.
  let queryName = req.query.name;
//use req.query to use that name in your res.send
  if (queryName) {
    res.send('Welcome to the page, ' + queryName);
  } else {
    res.send('Sad, no one is here!');
  }
});


module.exports = router;
