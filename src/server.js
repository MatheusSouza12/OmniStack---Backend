const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const server = express();

mongoose.connect('mongodb+srv://omnistack:matheus2010@cluster0-dry94.mongodb.net/omnistack8?retryWrites=true&w=majority', {
  useNewUrlParser: true
});
server.use(express.json());
server.use(cors());
server.use(routes);
server.listen(3333);