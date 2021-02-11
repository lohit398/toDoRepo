var express = require('express');
var app = express();
const path = require('path');
app.use(express.static(__dirname + '/'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/home.html'));
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
