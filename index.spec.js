const request = require('supertest');

const server = require('./api/server.js');

const db = require('./data/config.js');

describe('server', () => {
  beforeAll(function(done) {
    return db.migrate.latest().then(function() {
      return db.seed.run().then(function() {
        done();
      });
    });
  });

  beforeEach(function(done) {
    return db.migrate.rollback().then(function() {
      return db.migrate.latest().then(function() {
        return db.seed.run().then(function() {
          done();
        });
      });
    });
  });

  afterEach(function(done) {
    return db.migrate.rollback().then(function() {
      done();
    });
  });

  afterAll(function(done) {
    return db.migrate.latest().then(function() {
      return db.seed.run().then(function() {
        done();
      });
    });
  });

  describe('GET /api/notes', () => {
    it('if running correctly should get status 200(Ok)', async () => {
      const response = await request(server).get('/api/notes');

      expect(response.status).toBe(200);
    });

    it('get an array of objects', async () => {
      const response = await request(server).get('/api/notes');

      expect(response.body).toBeGreaterThan(0);
    });
  });

  describe('GET /api/notes/id', () => {
    it('get a ', () => {});
  });

  describe('POST /api/notes', () => {
    it('if running correctly should get status 201(Created)', async () => {
      const body = {
        title: 'hi',
        textBody: 'Howdy',
      };

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

    describe('require title and textBody', () => {
      it('Need title, get a 400(Bad Request) if not', async () => {
        const body = {
          textBody: 'Heya',
        };

        const response = await request(server)
          .post('/api/notes')
          .send(body);

        expect(response.status).toBe(400);
      });

      it('Need textBody, get a 400(Bad Request) if not', async () => {
        const body = {
          title: 'Heya',
        };

        const response = await request(server)
          .post('/api/notes')
          .send(body);

        expect(response.status).toBe(400);
      });
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
