'use strict';

var _            = require('underscore'),
    db           = require('../support/db'),

    Entry        = require('../../src/app/entries/models/Entry'),
    EntryFactory = require('../support/factories/entry_factory');

describe('Journal entries', function() {

  beforeEach(function(done) {
    db.cleanUp()
    .then(function() {
      done();
    });
  });

  it('should allow creating a new journal entry', function(done) {
    var args = { text: 'New Entry' },

        entry;

    request
      .post('/entries')
      .send(args)
      .expect(201)
      .end(function(err, res) {
        if (err) { return done(err); }

        Entry.findOne({ id: res.body.entry.id })
        .then(function(data) {
          expect(data).to.exist;

          entry = data.toJSON();

          expect(entry.id).to.equal(res.body.entry.id);
          expect(entry.text).to.equal(args.text);

          done();
        });
      });
  });

  it('should not create entries with invalid input', function(done) {
    var args = {};

    request
      .post('/entries')
      .send(args)
      .expect(422)
      .end(function(err, res) {
        if (err) { return done(err); }

        expect(res.body.errors).to.exist;
        done();
      });
  });

  describe('Modifying entries', function() {

    var _entry;

    beforeEach(function(done) {
      EntryFactory.create()
      .then(function(entry) {
        _entry = entry.toJSON();
        done();
      });
    });

    it('should allow updating an existing entry', function(done) {
      var args = { text: 'Updated text' },
          entry;

      request
        .put('/entries/' + _entry.id)
        .send(args)
        .expect(200)
        .end(function(err, res) {
          if (err) { return done(err); }

          Entry.findOne({ id: _entry.id })
          .then(function(data) {
            entry = data.toJSON();

            expect(entry.text).to.equal(args.text);
            done();
          });
        });
    });

    it('should not allow updating entries that do not exist', function(done) {
      request
        .put('/entries/' + _entry.id + 1)
        .send({ text: 'Something New' })
        .expect(404)
        .end(function(err, res) {
          if (err) { return done(err); }

          expect(res.body.errors).to.exist;
          done();
        });
    });

    it('should allow deleting an existing entry', function(done) {
      request
        .del('/entries/' + _entry.id)
        .expect(200)
        .end(function(err, res) {
          if (err) { return done(err) ; }

          Entry.findOne({ id: _entry.id })
          .then(function(data) {
            expect(data).not.to.exist;
            done();
          });
        });
    });

    it('should not allow deleting entries that do not exist', function(done) {
      request
        .del('/entries/' + _entry.id + 1)
        .expect(404)
        .end(function(err, res) {
          if (err) { return done(err); }

          expect(res.body.errors).to.exist;
          done();
        });
    });
  });

  describe('Getting entries', function() {
    var _e1, _e2;

    beforeEach(function(done) {
      EntryFactory.create()
      .then(function(entry) {
        _e1 = entry.toJSON();

        return EntryFactory.create();
      })
      .then(function(entry) {
        _e2 = entry.toJSON();
        done();
      });
    });

    it('should allow retrieving a list of entries', function(done) {
      var ids;

      request
        .get('/entries')
        .expect(200)
        .end(function(err, res) {
          if (err) { return done(err); }

          expect(res.body.entries.length).to.equal(2);

          ids = _.pluck(res.body.entries, 'id');
          expect(ids).to.contain(_e1.id);
          expect(ids).to.contain(_e2.id);

          done();
        });
    });

    it('should allow retrieving entries by month and year');
  });
});
