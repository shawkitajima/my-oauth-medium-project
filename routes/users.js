var express = require('express');
var router = express.Router();
// Right here!
var userCtrl = require('../controllers/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
// Right under me
router.post('/', userCtrl.create);
// Right under me
router.delete('/:comment', userCtrl.delete);

module.exports = router;
