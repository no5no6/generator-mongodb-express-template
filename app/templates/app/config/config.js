var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: '<%= slugify(appname) %>'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://test:123@localhost:27017/<%= slugify(appname) %>-development'
  },

  test: {
    root: rootPath,
    app: {
      name: '<%= slugify(appname) %>'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://test:123@localhost:27017/<%= slugify(appname) %>-test'
  },

  production: {
    root: rootPath,
    app: {
      name: '<%= slugify(appname) %>'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://test:123@localhost:27017/<%= slugify(appname) %>-production'
  }
};

module.exports = config[env];
