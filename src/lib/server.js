'use strict';

var express    = require('express'),
    bodyParser = require('body-parser'),
    Router     = require('./router'),

    Server;

Server = (function() {
  var _app = express();

  var _parseBody = function(app) {
    app.use(bodyParser.json());
  };

  var init = function(port) {
    var port = port || 4000;

    _parseBody(_app);

    Router.mount(_app);

    return _app.listen(port);
  };

  return {
    init: init
  };

}());

module.exports = Server;
