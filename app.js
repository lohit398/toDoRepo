var express = require('express');
var app = express();
const path = require('path');
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/'));


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/home.html'));
});
app.listen(port, function () {
    console.log('Example app listening on port 3000!');
});
