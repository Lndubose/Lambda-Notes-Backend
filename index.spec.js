const request = require('supertest');

const server = require('./api/server.js');

describe('server', () => {
  describe('server running', () => {
    it('server running', () => {
      expect(true).toBeTruthy();
    });

    it('server running', () => {
      expect(false).toBeFalsy();
    });
  });
});
