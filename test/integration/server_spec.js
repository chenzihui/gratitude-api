'use strict';

describe('API Server', function() {
  it('should listen to requests', function(done) {
    request
      .get('/status')
      .expect(200, done);
  });
});
