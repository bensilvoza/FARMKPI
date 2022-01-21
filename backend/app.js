

//require
var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');

// require routes
var index = require("./routes/index")
var evaluator = require("./routes/evaluator")
var supervisor = require("./routes/supervisor")

//use
var app = express();
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(cors());


//DATABASE
mongoose.connect(
	"mongodb+srv://Ben:aqqeikiulioeioADQQWWQWDioiplqyizfCDDb@farmkpi.mwzku.mongodb.net/FARMKPI?retryWrites=true&w=majority",
	{ useNewUrlParser: true, useUnifiedTopology: true }
);

var connection = mongoose.connection;
connection.once('open', function () {
	// console.log("Database is now connected")
});

 

//======
//ROUTES
app.use(index)
app.use(evaluator)
app.use(supervisor)


//app.listen
app.listen(process.env.PORT || 5000, function () {
	console.log('Server is running.');
	console.log('.');
	console.log('.');
	console.log('.');
})