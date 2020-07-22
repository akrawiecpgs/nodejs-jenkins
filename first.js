//Node.js has a set of built-in modules which you can use without any further installation
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World! visit http://localhost:8083');
}).listen(8083);
// node first.js
// stop ctrl-c 2x