var
  routes = require('./routes'), //TODO 为什么会直接定位到index.js?
  movie = require('./routes/movie');
//VERSION = "/1",
//WeixinApiController = require('./controllers/WeixinApiController');


module.exports = function (app) {
  //网页
  app.get('/', routes.index);
  app.get('/movie/add', movie.movieAdd);
  app.post('/movie/add', movie.doMovieAdd);
  app.get('/movie/:name', movie.movieAdd);
  app.get('/movie/json/:name', movie.movieJSON);
};
