var searchBox = document.getElementById("search-box");
var searchButton = document.getElementById("search-button");


searchButton.addEventListener('click', search);

async function search() {
	await fetch('http://www.omdbapi.com/?s=' + searchBox.value +'&apikey=e583146d')
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
				var postsSection = document.getElementById('posts');
				postsSection.insertAdjacentHTML('beforeend', newPost);
			}
		})
		.catch(err => {
			// Do something for an error here
			console.log("------------------ URL DNE");
		})
};

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
		console.log("cancel button");
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



function cleanMyText(textString){
	var cleanText = textString.replace(/[!"#$%&\\'()\*+,\-\.\/:;<=>?@\[\\\]\^_`{|}~]/g, '').toLowerCase();
	return cleanText;
}


function AcceptClick(){
	var movieTitleSearchText = document.getElementById('post-text-input').value;

	var cleanMovieTitle = cleanMyText(movieTitleSearchText);

	var allCards = document.querySelectorAll(".card")

	//search through card titles and remove ones that don't match
	for (i = 0; i < allCards.length; i++){
		console.log(allCards[i]);
		var textContentOfAllPostsArray = allCards[i].querySelector(".card-title").textContent.toLowerCase();
		if(textContentOfAllPostsArray.indexOf(cleanMovieTitle) == -1){ //if the post[i] doesnt contain search term, delete it
			allCards[i].parentNode.removeChild(allCards[i]);
		}
	}

}

function HandleAdvancedSearchAcceptClick(){

	hideAdvancedSearchModal();

	AcceptClick();
}



