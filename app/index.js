'use strict';
var util = require('util');
var path = require('path');
var generators = require('yeoman-generator');
var glob = require('glob');
var slugify = require('underscore.string/slugify');
var mkdirp = require('mkdirp');

module.exports = generators.Base.extend({
  constructor: function () {
    generators.Base.apply(this, arguments);

    this.option('skip-install');

    this.slugify = slugify;
  },
  prompting: {
    dir: function () {

      if (this.options.createDirectory !== undefined) {
        return true;
      }

      var prompt = [{
        type: 'confirm',
        name: 'createDirectory',
        message: 'Create a new directory for your project?'
      }];

      return this.prompt(prompt).then(function (response) {
        this.options.createDirectory = response.createDirectory;
      }.bind(this));
    },
    dirname: function () {
      if (!this.options.createDirectory || this.options.dirname) {
        return true;
      }

      var prompt = [{
        type: 'input',
        name: 'dirname',
        message: 'Enter directory name'
      }];

      return this.prompt(prompt).then(function (response) {
        this.options.dirname = response.dirname;
      }.bind(this));
    },
  },
  writing: {
    buildEnv: function () {

      if(this.options.createDirectory){
        this.destinationRoot(this.options.dirname);
        this.appname = this.options.dirname;
      }

      this.sourceRoot(path.join(__dirname, 'templates', 'shared'));
      glob.sync('**', { cwd: this.sourceRoot() }).map(function (file) {
        this.template(file, file.replace(/^_/, ''));
      }, this);

      this.sourceRoot(path.join(__dirname, 'templates', 'app'));
      this.directory('.', '.');

      this.sourceRoot(path.join(__dirname, 'templates', 'views', 'jade'));
      this.directory('.', 'views');

      this.sourceRoot(path.join(__dirname, 'templates', 'css', 'stylus'));
      this.directory('.', 'public/css');

      this.copy(path.join(__dirname, 'templates', 'gulp', 'gulpfile.js'), 'gulpfile.js');

    },
    assetsDirs: function () {
      mkdirp.sync('public');
      mkdirp.sync('public/js');
      mkdirp.sync('public/css');
      mkdirp.sync('public/img');
      mkdirp.sync('public/vendor');
    }
  },
  install: function () {
    if(!this.options['skip-install']) this.installDependencies();
  }
});
