var express       = require('express'),
	app           = module.exports = express(),
	path          = require('path'),
	routes        = require('./routes'),
	server        = module.exports.server = require('http').Server(app),
	passport      = require('passport'),
	LocalStrategy = require('passport-local').Strategy,
	mongoose      = require('mongoose');

/*
 * Configuration
 =========================================*/
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('node_modules', path.join(__dirname, 'node_modules'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
app.use(passport.session());


/* 
 * Database Things
=========================================*/

// Connect to the DB

/*
mongoose.connect('mongodb://argo:argo@ds055709.mongolab.com:55709/bilingual');

var Schema = mongoose.Schema;
var UserDetail = new Schema({
      username: String,
      password: String,
      language: String,
    }, {
      collection: 'Users'
    });
// This is the database object
var UserDetails = mongoose.model('Users', UserDetail);

UserDetails.findOne({
  'username': 'hussein',
}, function(err, user) {
	console.log(err, user);
});
*/

/*
 * Routing
 =========================================*/

app.get('/', routes.index);
app.get('/login', routes.login);
app.get('/loginFailure', routes.login);
app.get('/loginSuccess', routes.home);
app.get('/css/normalize.css', routes.normalizecss);


// 404 page should always be last
app.get('*', routes.fileNotFound); 



/*
 * Events
 =========================================*/

var events = require('./events');

// Start server listening
server.listen(app.get('port'), function () {
  console.log('Server listening on port ' + this.address().port);
});