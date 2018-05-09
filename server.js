const express = new require('express');
const http = require('http');
const path = require('path');
const config = require('config');
const log = new require('./src/server/lib/log')(module);
const mongoose = require('./src/server/lib/mongoose');
const HttpError = require('error').HttpError;

const app = express();

app.use(express.favicon());

if (app.get('env') === 'development') {
  app.use(express.logger('dev'));
} else {
  app.use(express.logger('default'));
}

app.use(express.bodyParser());

app.use(express.cookieParser());

const sessionStore = require('./src/server/lib/sessionStore');

app.use(express.session({
  secret: config.get('session:secret'),
  key: config.get('session:key'),
  cookie: config.get('session:cookie'),
  store: sessionStore
}));

app.use(require('./src/server/middleware/sendHttpError'));
app.use(require('./src/server/middleware/loadUser'));

app.use(app.router);

require('./src/server/routes')(app);

app.use(express.static(path.join(__dirname, 'public')));


app.use(function(err, req, res, next) {
  if (typeof err === 'number') {
    err = new HttpError(err);
  }

  if (err instanceof HttpError) {
    res.sendHttpError(err);
  } else {
    if (app.get('env') === 'development') {
      express.errorHandler()(err, req, res, next);
    } else {
      log.error(err);
      err = new HttpError(500);
      res.sendHttpError(err);
    }
  }
});

const server = http.createServer(app);
server.listen(config.get('port'), function(){
  log.info('Express server listening on port ' + config.get('port'));
});
