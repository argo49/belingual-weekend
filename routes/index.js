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
routes.divider = function(req, res) {
    res.render('divider.ejs');
}

// Social facebook page thing
routes.profile = function(req, res) {
    res.render('profile.ejs');
}

// lesson page thing
routes.learn = function(req, res) {
    res.render('learn.ejs');
}

// lesson page thing
routes.scenario = function(req, res) {
    res.render('scenario.ejs');
}

// lesson page thing
routes.game = function(req, res) {
    res.render('game.ejs');
}


module.exports = routes;