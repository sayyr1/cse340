const http = require('http');
const routes = require('./prove01-route'); 
const server = http.createServer(routes)
server.listen(3000);