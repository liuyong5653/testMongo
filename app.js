var
  app = require('./server').server,
  router = require('./router');

router(app);

app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});