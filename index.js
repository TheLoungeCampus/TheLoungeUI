// Dev use only
const express = require('express');
const app = express();
const port = 4000;
var path = require('path');

app.use(express.static(path.join(__dirname, 'app')));
// app.use(express.static(path.join(__dirname, './node_modules')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/app/index.html'));
});

app.listen(port, () => console.log('SLSH App listening on port ' + port + '!'));
