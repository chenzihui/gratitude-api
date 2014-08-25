'use strict';

var express = require('express'),
    Router  = require('./router'),

    Server;

Server = (function() {
  var _app = express();

  var init = function(port) {
    var port = port || 4000;

    Router.mount(_app);

    return _app.listen(port);
  };

  return {
    init: init
  };

}());

module.exports = Server;
