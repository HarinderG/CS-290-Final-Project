var searchBox = document.getElementById("search-box");
var searchButton = document.getElementById("search-button");

searchButton.addEventListener('click', search);

async function search() {
	await fetch('http://www.omdbapi.com/?s=' + searchBox.value +'&apikey=' + API_KEY)
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


var wantedDecade60to69 = document.getElementById('dropdown-decade-1960');
wantedDecade60to69.addEventListener('click', delDecade60to69);
var wantedDecade70to79 = document.getElementById('dropdown-decade-1970');
wantedDecade70to79.addEventListener('click', delDecade70to79);
var wantedDecade80to89 = document.getElementById('dropdown-decade-1980');
wantedDecade80to89.addEventListener('click', delDecade80to89);
var wantedDecade90to99 = document.getElementById('dropdown-decade-1990');
wantedDecade90to99.addEventListener('click', delDecade90to99);
var wantedDecade2000to2009 = document.getElementById('dropdown-decade-2000');
wantedDecade2000to2009.addEventListener('click', delDecade2000to2009);
var wantedDecade2010to2019 = document.getElementById('dropdown-decade-2010');
wantedDecade2010to2019.addEventListener('click', delDecade2010to2019);

var wantedGenreAction = document.getElementById('dropdown-genre-action');
wantedGenreAction.addEventListener('click', getGenreAction);
var wantedGenreAdventure = document.getElementById('dropdown-genre-adventure');
wantedGenreAdventure.addEventListener('click', getGenreAdventure);
var wantedGenreComedy = document.getElementById('dropdown-genre-comedy');
wantedGenreComedy.addEventListener('click', getGenreComedy);
var wantedGenreCrime = document.getElementById('dropdown-genre-crime');
wantedGenreCrime.addEventListener('click', getGenreCrime);
var wantedGenreDrama = document.getElementById('dropdown-genre-drama');
wantedGenreDrama.addEventListener('click', getGenreDrama);
var wantedGenreFamily = document.getElementById('dropdown-genre-family');
wantedGenreFamily.addEventListener('click', getGenreFamily);
var wantedGenreHistory = document.getElementById('dropdown-genre-history');
wantedGenreHistory.addEventListener('click', getGenreHistory);
var wantedGenreHorror = document.getElementById('dropdown-genre-horror');
wantedGenreHorror.addEventListener('click', getGenreHorror);
var wantedGenreMystery = document.getElementById('dropdown-genre-mystery');
wantedGenreMystery.addEventListener('click', getGenreMystery);
var wantedGenreRomance = document.getElementById('dropdown-genre-romance');
wantedGenreRomance.addEventListener('click', getGenreRomance);

var wantedGenreThriller = document.getElementById('dropdown-genre-thriller');
wantedGenreThriller.addEventListener('click', getGenreThriller);



function getGenreThriller(){
	var specifiedGenre = 'Thriller';
	var allCards = document.querySelectorAll(".card");

	for(i = 0; i < allCards.length; i++){
		var genreContentOfAllCardsArray = allCards[i].getAttribute("card-genre");
		console.log(genreContentOfAllCardsArray)
	 	if(genreContentOfAllCardsArray.indexOf(specifiedGenre) == -1){
			allCards[i].parentNode.removeChild(allCards[i]);
		}
	}
}


function getGenreRomance(){
	var specifiedGenre = 'Romance';
	var allCards = document.querySelectorAll(".card");

	for(i = 0; i < allCards.length; i++){
		var genreContentOfAllCardsArray = allCards[i].getAttribute("card-genre");
		console.log(genreContentOfAllCardsArray)
	 	if(genreContentOfAllCardsArray.indexOf(specifiedGenre) == -1){
			allCards[i].parentNode.removeChild(allCards[i]);
		}
	}
}

function getGenreMystery(){
	var specifiedGenre = 'Mystery';
	var allCards = document.querySelectorAll(".card");

	for(i = 0; i < allCards.length; i++){
		var genreContentOfAllCardsArray = allCards[i].getAttribute("card-genre");
		console.log(genreContentOfAllCardsArray)
	 	if(genreContentOfAllCardsArray.indexOf(specifiedGenre) == -1){
			allCards[i].parentNode.removeChild(allCards[i]);
		}
	}
}

function getGenreHorror(){
	var specifiedGenre = 'Horror';
	var allCards = document.querySelectorAll(".card");

	for(i = 0; i < allCards.length; i++){
		var genreContentOfAllCardsArray = allCards[i].getAttribute("card-genre");
		console.log(genreContentOfAllCardsArray)
	 	if(genreContentOfAllCardsArray.indexOf(specifiedGenre) == -1){
			allCards[i].parentNode.removeChild(allCards[i]);
		}
	}
}

function getGenreHistory(){
	var specifiedGenre = 'History';
	var allCards = document.querySelectorAll(".card");

	for(i = 0; i < allCards.length; i++){
		var genreContentOfAllCardsArray = allCards[i].getAttribute("card-genre");
		console.log(genreContentOfAllCardsArray)
	 	if(genreContentOfAllCardsArray.indexOf(specifiedGenre) == -1){
			allCards[i].parentNode.removeChild(allCards[i]);
		}
	}
}

function getGenreFamily(){
	var specifiedGenre = 'Family';
	var allCards = document.querySelectorAll(".card");

	for(i = 0; i < allCards.length; i++){
		var genreContentOfAllCardsArray = allCards[i].getAttribute("card-genre");
		console.log(genreContentOfAllCardsArray)
	 	if(genreContentOfAllCardsArray.indexOf(specifiedGenre) == -1){
			allCards[i].parentNode.removeChild(allCards[i]);
		}
	}
}

function getGenreDrama(){
	var specifiedGenre = 'Drama';
	var allCards = document.querySelectorAll(".card");

	for(i = 0; i < allCards.length; i++){
		var genreContentOfAllCardsArray = allCards[i].getAttribute("card-genre");
		console.log(genreContentOfAllCardsArray)
	 	if(genreContentOfAllCardsArray.indexOf(specifiedGenre) == -1){
			allCards[i].parentNode.removeChild(allCards[i]);
		}
	}
}

function getGenreCrime(){
	var specifiedGenre = 'Crime';
	var allCards = document.querySelectorAll(".card");

	for(i = 0; i < allCards.length; i++){
		var genreContentOfAllCardsArray = allCards[i].getAttribute("card-genre");
		console.log(genreContentOfAllCardsArray)
	 	if(genreContentOfAllCardsArray.indexOf(specifiedGenre) == -1){
			allCards[i].parentNode.removeChild(allCards[i]);
		}
	}
}

function getGenreComedy(){
	var specifiedGenre = 'Comedy';
	var allCards = document.querySelectorAll(".card");

	for(i = 0; i < allCards.length; i++){
		var genreContentOfAllCardsArray = allCards[i].getAttribute("card-genre");
		console.log(genreContentOfAllCardsArray)
	 	if(genreContentOfAllCardsArray.indexOf(specifiedGenre) == -1){
			allCards[i].parentNode.removeChild(allCards[i]);
		}
	}
}

function getGenreAdventure(){
	var specifiedGenre = 'Adventure';
	var allCards = document.querySelectorAll(".card");

	for(i = 0; i < allCards.length; i++){
		var genreContentOfAllCardsArray = allCards[i].getAttribute("card-genre");
		console.log(genreContentOfAllCardsArray)
	 	if(genreContentOfAllCardsArray.indexOf(specifiedGenre) == -1){
			allCards[i].parentNode.removeChild(allCards[i]);
		}
	}
}

function getGenreAction(){

	var specifiedGenre = 'Action';
	var allCards = document.querySelectorAll(".card");

	for(i = 0; i < allCards.length; i++){
		var genreContentOfAllCardsArray = allCards[i].getAttribute("card-genre");
		console.log(genreContentOfAllCardsArray)
	 	if(genreContentOfAllCardsArray.indexOf(specifiedGenre) == -1){
			allCards[i].parentNode.removeChild(allCards[i]);
		}
	}

}


function delDecade60to69(){
	var specifiedYear = '196';
	var allCards = document.querySelectorAll(".card");

	for(i = 0; i < allCards.length; i++){
		var yearContentOfAllCardsArray = allCards[i].querySelector(".card-year").textContent;
	 	if(yearContentOfAllCardsArray.indexOf(specifiedYear) == -1){
			allCards[i].parentNode.removeChild(allCards[i]);
		}
	}
}

function delDecade70to79(){
	var specifiedYear = '197';
	var allCards = document.querySelectorAll(".card");

	for(i = 0; i < allCards.length; i++){
		var yearContentOfAllCardsArray = allCards[i].querySelector(".card-year").textContent;
	 	if(yearContentOfAllCardsArray.indexOf(specifiedYear) == -1){
			allCards[i].parentNode.removeChild(allCards[i]);
		}
	}
}

function delDecade80to89(){
	var specifiedYear = '198';
	var allCards = document.querySelectorAll(".card");

	for(i = 0; i < allCards.length; i++){
		var yearContentOfAllCardsArray = allCards[i].querySelector(".card-year").textContent;
	 	if(yearContentOfAllCardsArray.indexOf(specifiedYear) == -1){
			allCards[i].parentNode.removeChild(allCards[i]);
		}
	}
}

function delDecade90to99(){
	var specifiedYear = '199';
	var allCards = document.querySelectorAll(".card");

	for(i = 0; i < allCards.length; i++){
		var yearContentOfAllCardsArray = allCards[i].querySelector(".card-year").textContent;
	 	if(yearContentOfAllCardsArray.indexOf(specifiedYear) == -1){
			allCards[i].parentNode.removeChild(allCards[i]);
		}
	}
}

function delDecade2000to2009(){
	var specifiedYear = '200';
	var allCards = document.querySelectorAll(".card");

	for(i = 0; i < allCards.length; i++){
		var yearContentOfAllCardsArray = allCards[i].querySelector(".card-year").textContent;
	 	if(yearContentOfAllCardsArray.indexOf(specifiedYear) == -1){
			allCards[i].parentNode.removeChild(allCards[i]);
		}
	}
}

function delDecade2010to2019(){
	var specifiedYear = '201';
	var allCards = document.querySelectorAll(".card");

	for(i = 0; i < allCards.length; i++){
		var yearContentOfAllCardsArray = allCards[i].querySelector(".card-year").textContent;
	 	if(yearContentOfAllCardsArray.indexOf(specifiedYear) == -1){
			allCards[i].parentNode.removeChild(allCards[i]);
		}
	}
}


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

	//search through card years and remove ones that don't match
	var specifiedYear = document.getElementById('post-year-input').value;

	for(i = 0; i < allCards.length; i++){
		var yearContentOfAllCardsArray = allCards[i].querySelector(".card-year").textContent;
		if(yearContentOfAllCardsArray.indexOf(specifiedYear) == -1){
			allCards[i].parentNode.removeChild(allCards[i]);
		}
	}


}


function HandleAdvancedSearchAcceptClick(){

	hideAdvancedSearchModal();

	AcceptClick();
}



