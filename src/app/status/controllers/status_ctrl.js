'use strict';

var StatusCtrl;

StatusCtrl = (function() {

  var show = function(req, res) {
    return res.status(200).send({ status: 'OK' });
  };

  return {
    show: show
  };

}());

module.exports = StatusCtrl;
