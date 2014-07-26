var app = require('../app');

var routes = {};

// GET home page
routes.index = function (req, res) {
    res.render('index.ejs', {ejsData:'EJS is working!'});
};

// GET normalize.css
routes.normalizecss = function (req, res) {
    res.sendfile(app.get('node_modules') + '/normalize.css/normalize.css');
};

// GET 404 page
routes.fileNotFound = function (req, res) {
    res.render('status/404.ejs');
};

// Login page
routes.login = function(req, res) {
    res.render('login.ejs');
}

// Home page divider
routes.home = function(req, res) {
    res.render('home.ejs');
}

module.exports = routes;