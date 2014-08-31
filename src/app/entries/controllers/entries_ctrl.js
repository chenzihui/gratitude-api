'use strict';

var Entry = require('../models/entry'),

    EntriesCtrl;

EntriesCtrl = (function() {

  var index = function(req, res) {
    Entry.findAll()
    .then(function(entries) {
      return res.status(200).json({
        entries: entries.toJSON()
      });
    });
  };

  var create = function(req, res) {
    var args = {
      text: req.body.text
    };

    Entry.add(args)
    .then(function(entry) {
      return res.status(201).json({
        entry: entry.toJSON()
      });
    })
    .catch(function(err) {
      return res.status(422).json({
        errors: { message: 'Entry cannot be left blank' }
      });
    });
  };

  var update = function(req, res) {

    Entry.findOne({ id: req.params.id })
    .then(function(entry) {
      if (!entry) { throw new Error('Entry not found'); }

      entry.set('text', req.body.text);
      return entry.save()
    })
    .then(function(entry) {
      return res.status(200).json({
        entry: { id: entry.id }
      });
    })
    .catch(function(err) {
      return res.status(404).json({
        errors: { message: 'Entry not found' }
      });
    });
  };

  var destroy = function(req, res) {

    Entry.findOne({ id: req.params.id })
    .then(function(entry) {
      if (!entry) {
        throw new Error('Entry not found');
      }

      return entry.destroy();
    })
    .then(function() {
      return res.status(200).json({});
    })
    .catch(function(err) {
      return res.status(404).json({
        errors: { message: 'Entry not found' }
      });
    });
  };

  return {
    index: index,
    create: create,
    update: update,
    destroy: destroy
  };

}());

module.exports = EntriesCtrl;
