// Config
const express = require('express'); // require express
const path = require('path'); // Require path module -> simplify work with path 
const bodyParser = require('body-parser'); // pull information from HTML POST
const cors = require('cors');
const passport = require('passport')
const mongoose = require('mongoose'); // database
const config = require('./config/database.js');
console.log(config.database);

mongoose.connect(config.database);

mongoose.connection.on('connected', function () {
	console.log('Connect to database')
})

var index = require('./routes/index'); 
var user = require('./routes/users'); 
 

// port number
var port = 3000; 
 
var app = express(); 
 
// CORS MW
app.use(cors());

// view engine 
// app.set('views', path.join(__dirname, 'views'));  
// app.set('view engine', 'ejs'); 
// app.engine('html', require('ejs').renderFile); 
 
// Set Static Folder 
app.use(express.static(path.join(__dirname, 'client'))); 
 
// Body Parser MW 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: false})); 

// routes
app.use('/', index); 
app.use('/users', user); 
 
app.listen(port, function(){ 
  console.log('Server started on port ' + port); 
});