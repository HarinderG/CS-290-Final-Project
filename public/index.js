var qSearch = document.getElementById("quick-search-box");
var qButton = document.getElementById("card-poster");
var filterCity = document.getElementById('filter-city');

/*qButton.addEventListener("click", search);
*/

async function search(movieTitle) {
	await fetch('http://www.omdbapi.com/?s=' + movieTitle + "&page=2" +'&apikey=e583146d')
		.then(response => {
			// Get JSON
			return response.json()
		})
		.then(data => {
			// Work with JSON data here
			for (var i = data.Search.length - 1; i >= 0; i--) {
				var newPost = Handlebars.templates.movieCard({
					Title: data.Search[i].Title,
					Poster: data.Search[i].Poster,
				});
				console.log(data.Search[i]);
				var postsSection = document.getElementById('posts');
				console.log(postsSection);
				postsSection.insertAdjacentHTML('beforeend', newPost);
			}
		})
		.catch(err => {
			// Do something for an error here
			console.log("------------------ URL DOES NOT EXIST");
		})
}
search("cars");