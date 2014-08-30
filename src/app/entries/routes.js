'use strict';

var express     = require('express'),
    controllers = require('./controllers'),

    router      = express.Router();

router.post('/', controllers.entriesCtrl.create);
router.put('/:id', controllers.entriesCtrl.update);
router.delete('/:id', controllers.entriesCtrl.destroy);

module.exports = router;
