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
//----------------------------------------------------------------------------------


var advancedSearchButton = document.getElementById('advanced-search-button');
if(advancedSearchButton){
	console.log("hit advanced search button");
	advancedSearchButton.addEventListener('click', showAdvancedSearchModal);
}

//make function
var modalAcceptButton = document.getElementById('modal-accept');
  if (modalAcceptButton) {
    modalAcceptButton.addEventListener('click', HandleAdvancedSearchAcceptClick);
  }
  
var modalCancelButton = document.getElementById('modal-cancel');
	if(modalCancelButton){
		console.log("close button");
		modalCancelButton.addEventListener('click', hideAdvancedSearchModal);
	}

//make modal pop up
function showAdvancedSearchModal(){

	var showAdvancedSearchModal = document.getElementById('advanced-search-modal');
	var modalBackDrop = document.getElementById('modal-backdrop');

	console.log("show button");
	showAdvancedSearchModal.style.display = "block";
	modalBackDrop.style.display = "block";


}

//hide modal from sight
function hideAdvancedSearchModal(){
	var showAdvancedSearchModal = document.getElementById('advanced-search-modal');
	var modalBackDrop = document.getElementById('modal-backdrop');

	console.log("hide the modal");
	showAdvancedSearchModal.style.display = "none";
	modalBackDrop.style.display = "none";

	


}

//update based on filter specifications
function HandleAdvancedSearchAcceptClick(){

	doFilterUpdate();

	hideAdvancedSearchModal();
}


//check if the filter conditions are acceptable
function postPassesFilters(post, filters) {

  if (filters.text) {
    var postDescription = post.description.toLowerCase();
    var movieTitle = filters.text.toLowerCase();
    if (postDescription.indexOf(filterText) === -1) {
      return false;
    }
  }

  if (filters.minScore) {
    var filterMinPrice = Number(filters.minScore);
    if (Number(post.Score) < filterMinScore) {
      return false;
    }
  }

  if (filters.maxScore) {
    var filterMaxPrice = Number(filters.maxScore);
    if (Number(post.Score) > filterMaxScore) {
      return false;
    }
  }

  return true;

}



function doFilterUpdate() {

  /*
   * Grab values of filters from user inputs.
   */
  var filters = {
    movieTitle: document.getElementById('filter-text').value.trim(),
    minScore: document.getElementById('filter-min-score').value,
    maxScore: document.getElementById('filter-max-score').value,
    year: document.getElementById('filter-year').value,
    Actor: document.getElementById('filter-actor').value
  }

  /*
   * Remove all "post" elements from the DOM.
   */
  var postContainer = document.getElementById('posts');
  while(postContainer.lastChild) {
    postContainer.removeChild(postContainer.lastChild);
  }

  /*
   * Loop through the collection of all "post" elements and re-insert ones
   * that meet the current filtering criteria.
   */
  allPosts.forEach(function (post) {
    if (postPassesFilters(post, filters)) {
      insertNewPost(post.description, post.Poster, post.Actor, post.Year, post.movieTitle);
    }
  });

}
