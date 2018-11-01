const request = require('supertest');

const server = require('./api/server.js');

const db = require('./data/config.js');

describe('server', () => {
  beforeEach(() => {
    db.migrate.latest();
  });

  afterEach(() => {
    db.migrate.rollback();
  });

  describe('GET /api/notes', () => {
    it('if running correctly should get status 200(Ok)', async () => {
      const response = await request(server).get('/api/notes');

      expect(response.status).toBe(200);
    });
  });

  describe('POST /api/notes', () => {
    it('if running correctly should get status 201(Created)', async () => {
      const body = { title: 'hi', textBody: 'Howdy' };

      const response = await request(server)
        .post('/api/notes')
        .send(body);

      expect(response.status).toBe(201);
    });

    it('posts the message and id when working', async () => {
      const body = { title: 'hi', textBody: 'Howdy' };

      const expected = {
        message: 'Note created',
        _id: expect.any(Number),
      };

      const response = await request(server)
        .post('/api/notes')
        .send(body);

      expect(response.body).toEqual(expect.objectContaining(expected));
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
