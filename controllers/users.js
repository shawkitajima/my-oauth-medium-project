const User = require('../models/user');

module.exports = {
    create,
    delete: removeComment
}

function create(req, res) {
    req.user.comments.push(req.body.compliment);
    req.user.save(function(err) {
        res.redirect('/');
    });
}

function removeComment(req, res) {
    console.log(req.params.comment);
    req.user.comments = req.user.comments.filter(comment => comment !== req.params.comment);
    req.user.save(function(err) {
        res.redirect('/');
    })
}