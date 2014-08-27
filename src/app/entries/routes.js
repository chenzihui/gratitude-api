'use strict';

var express     = require('express'),
    controllers = require('./controllers'),

    router      = express.Router();

router.post('/', controllers.entriesCtrl.create);

module.exports = router;
