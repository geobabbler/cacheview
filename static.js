var fs = require('fs'),
	open = require('open'),
    http = require('http');
var configdata = fs.readFileSync('./content/config.json'),
      configObj;
configObj = JSON.parse(configdata);	

http.createServer(function (req, res) {
  var fld = configObj.folder;
  //if requesting something from 'content' folder, server from current app location
  if (req.url.toLowerCase().indexOf("/content") !== -1)
  {
	fld = __dirname;
  }
  fs.readFile(fld + req.url, function (err,data) {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
	//ensure correct content type
	var type = require('./content/scripts/mime').lookup(fld + req.url);
	res.setHeader('Content-Type', type);
    res.writeHead(200);
    res.end(data);
  });
}).listen(configObj.port);
//open the map page in the default browser
open('http://localhost:' + configObj.port + '/content/map.html');