var express = require('express');
var path = require('path');
var app = express();
var rootPath = path.normalize(__dirname + '/../');

app.use(express.static(rootPath + '/app'));

let port = process.env.PORT;
if (port == null || port == '') {
  port = 3001;
}
app.listen(port);
console.log('Listening on port 3001...');
