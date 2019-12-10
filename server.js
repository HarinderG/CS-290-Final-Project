var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var config = require('./config.js');
var app = express();
var port = process.env.PORT || 3000;

var fetch = require("node-fetch");

app.engine('handlebars', exphbs({}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get("/", async function (req, res) {
	await fetch('http://www.omdbapi.com/?s=' + "cars" +'&apikey=' + config.API_KEY)
		.then(response => {
			// Get JSON
			return response.json()
		})
		.then(data => {
			// Work with JSON data here
			var apiData = data.Search;
			res.status(200).render('moviePage', {apiData});
		})
		.catch(err => {
			// Do something for an error here
			console.log("------------------ URL DOES NOT EXIST");
		})
});

app.get("/:s/:n", async function (req, res) {
	var search = req.params.s;
	var pageNum = req.params.n;

	await fetch('http://www.omdbapi.com/?s=' + search + "&page=" + pageNum +'&apikey=' + config.API_KEY)
		.then(response => {
			// Get JSON
			return response.json()
		})
		.then(data => {
			// Work with JSON data here
			var apiData = data.Search;
			res.status(200).render('moviePage', {apiData});
		})
		.catch(err => {
			// Do something for an error here
			console.log("------------------ URL DOES NOT EXIST");
		})
});

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});