const server = require('./api/server.js');
const port = 7777;

server.listen(port, () =>
  console.log(`===Server running on ${port} port===\n`)
);
