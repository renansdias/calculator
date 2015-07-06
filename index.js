var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.json({
		status: "Ok"
	});
});

app.listen(7777, function() {
	console.log('App running on port 7777');
});