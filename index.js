// Dev use only
const express = require('express');
const app = express();
const port = 4000;
var path = require('path');

app.use(express.static(path.join(__dirname, 'app')));
app.route('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/app/index.html'));
});
// Let Angular handle routing...
app.all('*', function(req, res) {
    res.sendFile(path.resolve(__dirname + '/app/index.html' ));
});
app.listen(port, () => console.log('SLSH App listening on port ' + port + '!'));
