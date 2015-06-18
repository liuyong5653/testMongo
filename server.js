var
  express = require('express'),
  path = require('path'),

  favicon = require('serve-favicon'),
  logger = require('morgan'),
  methodOverride = require('method-override'),
  session = require('express-session'),
  bodyParser = require('body-parser'),
  multer = require('multer'),
  errorHandler = require('errorhandler'),

  ejs = require('ejs');

var
  app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname + '/views'));
app.engine('.html', ejs.__express);
app.set('view engine', 'html');

app.use(favicon(__dirname + '/public/zlycare.ico'));
app.use(express.static(path.join(__dirname + '/public')));     // set the static files location /public/img will be /img for users
app.use(logger('dev'));                     // log every request to the console
//app.use(bodyParser.urlencoded({extended: false}));    // parse application/x-www-form-urlencoded
app.use(bodyParser.json());    // parse application/json
app.use(methodOverride());                  // simulate DELETE and PUT
app.use(multer());

//app.use(session({ resave: true,
//  saveUninitialized: true,
//  secret: 'uwotm8' }));

// error handling middleware should be loaded after the loading the routes
if ('development' == app.get('env')) {
  app.use(errorHandler());
}

exports.server = app;