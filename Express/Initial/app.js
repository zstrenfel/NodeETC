/*
* Module Dependencies
*/

var express = require('express'),
	sass = require('node-sass-middleware'),
	path = require('path');
var app = express();


app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.logger('dev'));
app.use(sass({
	src: __dirname + "/sass",
	dest: path.join(__dirname + '/public'),
	debug: true,
	outputStyle: 'compressed'
}));
app.use(express.static(path.join(__dirname + '/public')));

app.get('/', function(req, res) {
	res.render('index', { title: 'Home'}
		)
});
app.listen(3000);