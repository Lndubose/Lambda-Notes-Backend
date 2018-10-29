const request = require('supertest');

const server = require('./api/server.js');

describe('server', () => {
  describe('GET /api/notes', () => {
    it('if running correctly should get status 200(Ok)', async () => {
      const response = await request(server).get('/api/notes');

      expect(response.status).toBe(200);
    });
  });

  describe('server running', () => {
    it('server running', () => {
      expect(true).toBeTruthy();
    });

    it('server running', () => {
      expect(false).toBeFalsy();
    });
  });
});
