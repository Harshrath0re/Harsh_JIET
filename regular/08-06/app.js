var http = require("http");
var func = require('./func')


http
  .createServer((req, res) => {
      res.writeHead(200);
      res.write("function: " + func.mydata());
      res.end();
  })
  .listen(7007) 