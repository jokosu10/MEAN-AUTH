const express    = require('express');
const path       = require('path');
const bodyParser = require('body-parser');
const cors       = require('cors');
const passport   = require('passport');
const mongoose   = require('mongoose');

//initialize express
const app  = express();

//initialize port app
const port = 3000;

//CORS middleware
app.use(cors());

//body parser middleware
app.use(bodyParser.json());

//index route
app.get('/', (req, res) => {
  res.send('Invalid Endpoint');
});

app.listen(port, () => {
  console.log('Server started on port ' + port);
});
