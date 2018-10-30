const server = require('./api/server.js');
const port = process.env.PORT || 7777;

server.get('/', (req, res) => {
  res.send('Running');
});

server.listen(port, () =>
  console.log(`===Server running on ${port} port===\n`)
);
