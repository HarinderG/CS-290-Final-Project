var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var app = express();
var port = process.env.PORT || 3000;

/*var postData = require("./postData.json");
var test;*/

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get("*", function (req, res) {
  res.status(200).render('moviePage');
});

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});