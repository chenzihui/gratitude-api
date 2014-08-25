'use strict';

var fs   = require('fs'),
    path = require('path'),

    Router;

Router = (function() {

  var appPath = path.join(__dirname, '../app')

  var mount = function(app) {

    var module, stat, routes;

    fs.readdirSync(appPath).forEach(function(dir) {
      module = path.join(appPath, dir);
      stat = fs.statSync(module);

      if (!stat.isDirectory()) return;

      fs.readdirSync(module).forEach(function(file) {
        if (!file.match(/routes/g)) return;

        routes = require(path.join(module, file));

        app.use('/' + dir, routes);
      });
    });
  };

  return {
    mount: mount
  };

}());

module.exports = Router;
