var qSearch = document.getElementById("quick-search-box");
var qButton = document.getElementById("card-poster");
var filterCity = document.getElementById('filter-city');

/*qButton.addEventListener("click", search);
*/


//----------------------------------------------------------------------------------


var advancedSearchButton = document.getElementById('advanced-search-button');
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

//make modal pop up
function showAdvancedSearchModal(){

	var showAdvancedSearchModal = document.getElementById('Advanced-Search-Modal');
	var modalBackDrop = document.getElementById('modal-backdrop');

	showAdvancedSearchModal.ClassList.remove('hidden');
	modalBackDrop.ClassList.remove('hidden');
}

//hide modal from sight
function hideAdvancedSearchModal(){
	var showAdvancedSearchModal = document.getElementById('Advanced-Search-Modal');
	var modalBackDrop = document.getElementById('modal-backdrop');

	showAdvancedSearchModal.ClassList.add('hidden');
	modalBackDrop.ClassList.add('hidden');

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





