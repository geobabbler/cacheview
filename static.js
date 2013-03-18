var fs = require('fs'),
    http = require('http');
var configdata = fs.readFileSync('./content/config.json'),
      configObj;
configObj = JSON.parse(configdata);	

http.createServer(function (req, res) {
  var fld = configObj.folder;
  if (req.url.toLowerCase().indexOf("/content") !== -1) //(req.url == "/map.html" || req.url == "/config.json")
  {
	fld = __dirname;
  }
  fs.readFile(fld + req.url, function (err,data) {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
	var type = require('./content/scripts/mime').lookup(fld + req.url);
	res.setHeader('Content-Type', type);
    res.writeHead(200);
    res.end(data);
  });
}).listen(configObj.port);