let express = require('express'),
    config  = require('./config/config'),
    models  = require("./models");

let app = express();
global.app  = app;

models(config.db, function(err, models){
  if(err) return res.send(500,err.stack);
  app.models = models;
});

require('./config/express')(app, config);

app.listen(config.port, function () {
  console.log('Express server listening on port ' + config.port);
});

