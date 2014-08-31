'use strict';

var Server = require('../lib/server'),
    port   = process.PORT || 3000;

Server.init(port);

console.log('Server has started and is listening on port %d', port);
