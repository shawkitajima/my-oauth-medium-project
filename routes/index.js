var express = require('express');
var router = express.Router();
// Right under me
var passport = require('passport');
// Right under me
const User = require('../models/user');

/* GET home page. */
router.get('/', function(req, res, next) {
  User.find({}, function(err, users) {
    res.render('index', { 
      users,
      activeUser: req.user 
    });
  });
});
// Right under me

router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/',
    failureRedirect : '/'
  }
));

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}

module.exports = router;
