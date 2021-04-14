const express = require('express');
const mongoose = require('mongoose');
const routers = require('./routers').routers;
const path = require('path');
const app = express();
const PORT = 8080;

app.use(express.static(path.join(__dirname, 'build')));
app.use('/api', routers);

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));

