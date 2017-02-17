const express    = require('express');
const path       = require('path');
const bodyParser = require('body-parser');
const cors       = require('cors');
const passport   = require('passport');
const mongoose   = require('mongoose');
const users      = require('./routes/users');
const config     = require('./config/database');

//connected database
mongoose.connect(config.database);

//when connected database
mongoose.connection.on('connected', () => {
  console.log('connected to database ' + config.database);
});

//when database error
mongoose.connection.on('error', (err) => {
  console.log('database erorr: '+ err);
});

//initialize express
const app  = express();

//initialize port app
const port = 3000;

//CORS middleware
app.use(cors());

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

//body parser middleware
app.use(bodyParser.json());

//pasport initialize
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

app.use('/users', users);

//index route
app.get('/', (req, res) => {
  res.send('Invalid Endpoint');
});

app.listen(port, () => {
  console.log('Server started on port ' + port);
});
