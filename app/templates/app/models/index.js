let mongoose      = require('mongoose'),
    event_emitter = new (require('events').EventEmitter);
    async         = require('async');
    fs            = require('fs');
    _             = require('lodash');

let models_cache  = {};

module.exports = function(host, callback){
  
  if (models = models_cache[host]) return callback(null, models);

  event_emitter.on(host, function(models) {
    console.log(host, 'event on');
    callback(null, models);
  });

  fs.readdir(__dirname, function(err, files) {
    
    mongoose.Promise = global.Promise;
    connection = mongoose.createConnection(host);
    
    let models = files.reduce(function(models, file) {
      if (!fs.statSync(__dirname + '/' + file).isDirectory()) {
        return models;
      }
      if (file === 'Shared') {
        return models;
      } 
      model = connection.model(file, require('./' + file + '/index.js'));
      models[file] = model
      return models
    }, {});

    tasks = (function() {
      return _.reduce(models, function(results, item){
        let model = item;
        if (model.cache){
          results.push(model.cache.bind(model));
        }
        return results;
      }, []);
    })();

    async.parallel(tasks, function(error) {
      if (error) return callback(error);
      event_emitter.emit(host, models_cache[host] = models);
    });
  });
}
