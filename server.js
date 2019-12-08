var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var app = express();
var port = process.env.PORT || 3000;

/*var postData = require("./postData.json");
var test;*/

var fetch = require("node-fetch");

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get("*", async function (req, res) {
	await fetch('http://www.omdbapi.com/?s=' + "cars" +'&apikey=e583146d')
		.then(response => {
			// Get JSON
			return response.json()
		})
		.then(data => {
			// Work with JSON data here
			res.status(200).render('moviePage', {data});
		})
		.catch(err => {
			// Do something for an error here
			console.log("------------------ URL DOES NOT EXIST");
		})
});

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});