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

app.get("/", displayMovies);

app.get("/:s", displayMovies);

app.get("/:s/info", async function (req, res) {
	var search = req.params.s;
	await fetch('http://www.omdbapi.com/?t=' + search + '&type=movie&plot=full&apikey=' + config.API_KEY)
		.then(response => {
			return response.json();
		})
		.then(data => {
			res.status(200).render('movieInfo', data);
		})
		.catch(err => {
			console.log("------------------ URL DOES NOT EXIST");
		});
});

app.get("*", (req, res) => {
	res.status(404).render('404');
});

async function displayMovies (req, res) {
	var search = req.params.s;
	var titleList = [];
	var apiData = [];
	var apiRespone = "True";
	var pageN = 1;

	if (search == undefined)
		search = "star wars";

	for (var pageN; pageN <= 10; pageN++) {
		await fetch('http://www.omdbapi.com/?s=' + search + "&page=" + pageN +'&apikey=' + config.API_KEY)
			.then(response => {
				return response.json();
			})
			.then(data => {
				apiRespone = data.Response;
				if (apiRespone.indexOf("True") != -1) {
					for (var i = 0; i < data.Search.length; i++) {
						console.log("Found " + data.Search[i].Title + " on page " + pageN);
						if (data.Search[i].Type.indexOf("movie") != -1 && titleList.indexOf(data.Search[i].Title) == -1 && data.Search[i].Poster.indexOf("N/A") == -1)
							titleList.push(data.Search[i].Title);
					}
				}
			})
			.catch(err => {
				console.log("------------------ URL DOES NOT EXIST");
			});
		}

		for (var i = 0; i < titleList.length; i++){
			await fetch('http://www.omdbapi.com/?t=' + titleList[i] +'&apikey=' + config.API_KEY)
				.then(response => {
					return response.json();
				})
				.then(data => {
					if (data.Title.indexOf("undefined") == -1) {
						console.log("Adding == : " + data.Title);
						if (data.Poster.indexOf("N/A") == -1)
							apiData.push(data);
					}
				})
				.catch(err => {
					console.log("------------------ URL DOES NOT EXIST");
				});
		}
		if (apiData.length == 0)
			res.status(200).render('badSearch');
		else
			res.status(200).render('moviePage', {apiData});
}

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
