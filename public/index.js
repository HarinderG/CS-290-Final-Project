var qSearch = document.getElementById("quick-search-box");
var qButton = document.getElementById("card-poster");
var filterCity = document.getElementById('filter-city');
console.log(qButton);

qButton.addEventListener("click", search);


function search() {
	console.log(qSearch);
	fetch('http://www.omdbapi.com/?t=Avengers&apikey=' + API_KEY)
		.then(response => {
			// Get JSON
			return response.json()
		})
		.then(data => {
			// Work with JSON data here
			var img = document.getElementById("card-poster");
			img.src = data['Poster'];
		})
		.catch(err => {
			// Do something for an error here
		})
}
 search();


 function search(movieTitle) {
	console.log(qSearch);
	fetch('http://www.omdbapi.com/?s=' + movieTitle +'&apikey=' + API_KEY)
		.then(response => {
			// Get JSON
			return response.json()
		})
		.then(data => {
			// Work with JSON data here
			var img = document.getElementById(/*"unknownYet"*/);
			img.src = data['Poster'];
		})
		.catch(err => {
			// Do something for an error here
			//display 404 error page 
			//res.status(404).render('404');  ?
		})
}
search(title);





