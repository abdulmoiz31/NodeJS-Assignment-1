const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
    console.log('Req Url: ', req.url);
    const reqUrl = url.parse(req.url).pathname
    if(reqUrl == "/") {
      fs.readFile('index.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    }
  );
}
    else if(reqUrl == "/hello") {
        res.write("hello world")
        res.end()
    }
    else{
      res.write("404 Not Found");
      res.end()
    }
})
server.listen(8080)