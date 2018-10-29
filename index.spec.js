const request = require('supertest');

const server = require('./api/server.js');

describe('server', () => {
  afterEach(() => {
    server.db.dropDatabase();
    console.log('runnning');
  });

  describe('GET /api/notes', () => {
    it('if running correctly should get status 200(Ok)', async () => {
      const response = await request(server).get('/api/notes');

      expect(response.status).toBe(200);
    });
  });

  // describe('POST /api/notes', () => {
  //   it('if running correctly should get status 201(Created)', async () => {
  //     const body = { title: 'hi', textBody: 'Howdy' };
  //     const response = await request(server)
  //       .post('/api/notes')
  //       .send(body);

  //     expect(response.status).toBe(201);
  //   });
  // });

  describe('server running', () => {
    it('server running', () => {
      expect(true).toBeTruthy();
    });

    it('server running', () => {
      expect(false).toBeFalsy();
    });
  });
});
