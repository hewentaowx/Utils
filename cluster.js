const cluster = require('cluster');
const http = require('http');
const os = require('os');

const numCpus = os.cpus().length;

if (cluster.isMaster) {
  for (let i = 0; i < numCpus; i++) {
    cluster.fork();
  }
} else {
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Hello, World');
  }).listen(9000);
}