var qSearch = document.getElementById("quick-search-box");
var qButton = document.getElementById("card-poster");
var filterCity = document.getElementById('filter-city');
console.log(qButton);

var API_KEY = e583146d;




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


//----------------------------------------------------------------------------------


var advancedSearchButton = document.getElementById('Advanced-Search-Modal');
if(advancedSearchButton){
	advancedSearchButton.addEventListener('click', showAdvancedSearchModal);
}

//make function
var modalAcceptButton = document.getElementById('modal-accept');
  if (modalAcceptButton) {
    modalAcceptButton.addEventListener('click', HandleAdvancedSearchAcceptClick);
  }
  
var modalCancelButton = document.getElementById('modal-cancel');
	if('modal-cancel'){
		modalCancelButton.addEventListener('click', hideAdvancedSearchModal);
	}

function showAdvancedSearchModal(){

	var showAdvancedSearchModal = document.getElementById('Advanced-Search-Modal');
	var modalBackDrop = document.getElementById('modal-backdrop');

	showAdvancedSearchModal.ClassList.remove('hidden');
	modalBackDrop.ClassList.remove('hidden');
}

function hideAdvancedSearchModal(){
	var showAdvancedSearchModal = document.getElementById('Advanced-Search-Modal');
	var modalBackDrop = document.getElementById('modal-backdrop');

	showAdvancedSearchModal.ClassList.add('hidden');
	modalBackDrop.ClassList.add('hidden');

}

function HandleAdvancedSearchAcceptClick(){

	doFilterUpdate();

	hideAdvancedSearchModal();

}


function doFilterUpdate() {

  /*
   * Grab values of filters from user inputs.
   */
  var filters = {
    movieTitle: document.getElementById('filter-text').value.trim(),
    minScore: document.getElementById('filter-min-price').value,
    maxScore: document.getElementById('filter-max-price').value,
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
      insertNewPost(post.description, post.photoURL, post.price, post.city, post.condition);
    }
  });

}








