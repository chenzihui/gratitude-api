'use strict';

var chai      = require('chai'),
    supertest = require('supertest'),

    server    = require('../../src/lib/server');

global.expect = chai.expect;
global.request = supertest(server.init());
