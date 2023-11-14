const express = require('express');
var cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/images', express.static('imgs'));
const routes = require('./routes')(app);

app.use(express.static('build'));
app.get('*', function(req, res) {
  res.sendFile('index.html', { root: __dirname })
});

const server = app.listen(3333, () => {
  console.log('Listening on port %s...', server.address().port);
});
