// Config
const express = require('express'); // require express
const path = require('path'); // Require path module -> simplify work with path 
const bodyParser = require('body-parser'); // pull information from HTML POST
const cors = require('cors');
const passport = require('passport')
const mongoose = require('mongoose'); // database
const config = require('./config/database.js'); // database config

// database connect
mongoose.connect(config.database, {
	useMongoClient: true,
});


// on connetion
mongoose.connection.on('connected', function () {
	console.log('Connect to database')
})

var index = require('./routes/index'); 
var user = require('./routes/users'); 
 

// port number
var port = 5000; 
 
var app = express(); 
 
// CORS MW
app.use(cors());

// view engine 
// app.set('views', path.join(__dirname, 'views'));  
// app.set('view engine', 'ejs'); 
// app.engine('html', require('ejs').renderFile); 
 
// Set Static Folder 
app.use(express.static(path.join(__dirname, 'public'))); 
 
// Body Parser MW 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: false})); 

// Passport MW
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport.js')(passport);

// routes
app.use('/', index); 
app.use('/users', user); 
 
app.listen(port, function(){ 
  console.log('Server started on port ' + port); 
});