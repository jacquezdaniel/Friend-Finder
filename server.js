var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

var PORT = process.env.PORT;

app.use(express.static(path.join(__dirname, 'app/public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.app+json' }));

require(path.join(__dirname, './app/routing/api-routes.js'))(app);
require(path.join(__dirname, './app/routing/html-routes.js'))(app);


app.listen(PORT, function() {
    console.log('Friend Finder app is listening on PORT: ' + PORT);
});