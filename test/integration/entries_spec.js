'use strict';

var db    = require('../support/db'),

    Entry = require('../../src/app/entries/models/Entry');

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

  it('should not create entries with invalid input');
  it('should allow updating an existing entry');
  it('should allow deleting an existing entry');
  it('should allow retrieving a list of entries');
  it('should allow retrieving entries by month and year');
});
