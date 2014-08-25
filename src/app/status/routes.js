'use strict';

var express     = require('express'),
    controllers = require('./controllers'),

    router      = express.Router();

router.get('/', controllers.statusCtrl.show);

module.exports = router;
