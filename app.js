const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get('/about', function (request, response) {
  response.sendFile(__dirname + '/views/about.html');
});
app.get('/works', function (request, response) {
  response.sendFile(__dirname + '/views/works.html');
});
app.get('/photos', function (request, response) {
  response.sendFile(__dirname + '/views/photos.html');
});

app.listen(3020);
