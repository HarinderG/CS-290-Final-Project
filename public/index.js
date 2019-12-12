var searchBox = document.getElementById("search-box");
var searchButton = document.getElementById("search-button");

searchButton.addEventListener('click', function search() {
	window.location.href = "http://localhost:3000/" + searchBox.value;
});
searchBox.addEventListener('keypress', function search(e) {
	var key = e.which || e.keyCode;
	if (key === 13)
		window.location.href = "http://localhost:3000/" + searchBox.value;
});


//----------------------------------------------------------------------------------

//variables for event listening
//decade buttons
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

//genre buttons
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
var wantedGenreAnimation = document.getElementById('dropdown-genre-animation');
wantedGenreAnimation.addEventListener('click', getGenreAnimation);

//rating buttons
var wantedRatingG = document.getElementById("dropdown-rated-g");
wantedRatingG.addEventListener('click', getRatingG)
var wantedRatingPG = document.getElementById('dropdown-rated-pg')
wantedRatingPG.addEventListener('click', getRatingPG)
var wantedRatingPG13 = document.getElementById('dropdown-rated-pg13')
wantedRatingPG13.addEventListener('click', getRatingPG13)
var wantedRatingR = document.getElementById('dropdown-rated-r')
wantedRatingR.addEventListener('click', getRatingR)

//metacritic buttons
var wantedScore90to100 = document.getElementById("dropdown-metascore-90");
wantedScore90to100.addEventListener('click', getScore90to100);
var wantedScore80to89 = document.getElementById("dropdown-metascore-80");
wantedScore80to89.addEventListener('click', getScore80to89);
var wantedScore70to79 = document.getElementById("dropdown-metascore-70");
wantedScore70to79.addEventListener('click', getScore70to79);
var wantedScore60to69 = document.getElementById("dropdown-metascore-60");
wantedScore60to69.addEventListener('click', getScore60to69);
var wantedScore50to59 = document.getElementById("dropdown-metascore-50");
wantedScore50to59.addEventListener('click', getScore50to59);
var wantedScore40to49 = document.getElementById("dropdown-metascore-40");
wantedScore40to49.addEventListener('click', getScore40to49);
var wantedScore30to39 = document.getElementById("dropdown-metascore-30");
wantedScore30to39.addEventListener('click', getScore30to39);
var wantedScore20to29 = document.getElementById("dropdown-metascore-20");
wantedScore20to29.addEventListener('click', getScore20to29);
var wantedScore10to19 = document.getElementById("dropdown-metascore-10");
wantedScore10to19.addEventListener('click', getScore10to19);


function getScore10to19(){
	var specifiedScore = '1'
	var allCards = document.querySelectorAll(".card");

	for(i = 0; i < allCards.length; i++){
		var scoreContentOfAllCardsArray = allCards[i].getAttribute("card-metascore");
	 	if(scoreContentOfAllCardsArray != specifiedScore+0 && scoreContentOfAllCardsArray != specifiedScore+1 && scoreContentOfAllCardsArray != specifiedScore+2 && scoreContentOfAllCardsArray != specifiedScore+3 && scoreContentOfAllCardsArray != specifiedScore+4 && scoreContentOfAllCardsArray !=specifiedScore+5 && scoreContentOfAllCardsArray != specifiedScore+6 && scoreContentOfAllCardsArray != specifiedScore+7 && scoreContentOfAllCardsArray != specifiedScore+8 && scoreContentOfAllCardsArray != specifiedScore+9){
	 		console.log('removed a score of: ' + scoreContentOfAllCardsArray)
			allCards[i].parentNode.removeChild(allCards[i]);
		}
	}

}

function getScore20to29(){
	var specifiedScore = '2'
	var allCards = document.querySelectorAll(".card");

	for(i = 0; i < allCards.length; i++){
		var scoreContentOfAllCardsArray = allCards[i].getAttribute("card-metascore");
	 	if(scoreContentOfAllCardsArray != specifiedScore+0 && scoreContentOfAllCardsArray != specifiedScore+1 && scoreContentOfAllCardsArray != specifiedScore+2 && scoreContentOfAllCardsArray != specifiedScore+3 && scoreContentOfAllCardsArray != specifiedScore+4 && scoreContentOfAllCardsArray !=specifiedScore+5 && scoreContentOfAllCardsArray != specifiedScore+6 && scoreContentOfAllCardsArray != specifiedScore+7 && scoreContentOfAllCardsArray != specifiedScore+8 && scoreContentOfAllCardsArray != specifiedScore+9){
	 		console.log('removed a score of: ' + scoreContentOfAllCardsArray)
			allCards[i].parentNode.removeChild(allCards[i]);
		}
	}

}

function getScore30to39(){
	var specifiedScore = '3'
	var allCards = document.querySelectorAll(".card");

	for(i = 0; i < allCards.length; i++){
		var scoreContentOfAllCardsArray = allCards[i].getAttribute("card-metascore");
	 	if(scoreContentOfAllCardsArray != specifiedScore+0 && scoreContentOfAllCardsArray != specifiedScore+1 && scoreContentOfAllCardsArray != specifiedScore+2 && scoreContentOfAllCardsArray != specifiedScore+3 && scoreContentOfAllCardsArray != specifiedScore+4 && scoreContentOfAllCardsArray !=specifiedScore+5 && scoreContentOfAllCardsArray != specifiedScore+6 && scoreContentOfAllCardsArray != specifiedScore+7 && scoreContentOfAllCardsArray != specifiedScore+8 && scoreContentOfAllCardsArray != specifiedScore+9){
	 		console.log('removed a score of: ' + scoreContentOfAllCardsArray)
			allCards[i].parentNode.removeChild(allCards[i]);
		}
	}

}	

function getScore40to49(){
	var specifiedScore = '4'
	var allCards = document.querySelectorAll(".card");

	for(i = 0; i < allCards.length; i++){
		var scoreContentOfAllCardsArray = allCards[i].getAttribute("card-metascore");
	 	if(scoreContentOfAllCardsArray != specifiedScore+0 && scoreContentOfAllCardsArray != specifiedScore+1 && scoreContentOfAllCardsArray != specifiedScore+2 && scoreContentOfAllCardsArray != specifiedScore+3 && scoreContentOfAllCardsArray != specifiedScore+4 && scoreContentOfAllCardsArray !=specifiedScore+5 && scoreContentOfAllCardsArray != specifiedScore+6 && scoreContentOfAllCardsArray != specifiedScore+7 && scoreContentOfAllCardsArray != specifiedScore+8 && scoreContentOfAllCardsArray != specifiedScore+9){
	 		console.log('removed a score of: ' + scoreContentOfAllCardsArray)
			allCards[i].parentNode.removeChild(allCards[i]);
		}
	}

}

function getScore50to59(){
	var specifiedScore = '5'
	var allCards = document.querySelectorAll(".card");

	for(i = 0; i < allCards.length; i++){
		var scoreContentOfAllCardsArray = allCards[i].getAttribute("card-metascore");
	 	if(scoreContentOfAllCardsArray != specifiedScore+0 && scoreContentOfAllCardsArray != specifiedScore+1 && scoreContentOfAllCardsArray != specifiedScore+2 && scoreContentOfAllCardsArray != specifiedScore+3 && scoreContentOfAllCardsArray != specifiedScore+4 && scoreContentOfAllCardsArray !=specifiedScore+5 && scoreContentOfAllCardsArray != specifiedScore+6 && scoreContentOfAllCardsArray != specifiedScore+7 && scoreContentOfAllCardsArray != specifiedScore+8 && scoreContentOfAllCardsArray != specifiedScore+9){
	 		console.log('removed a score of: ' + scoreContentOfAllCardsArray)
			allCards[i].parentNode.removeChild(allCards[i]);
		}
	}

}

function getScore60to69(){
	var specifiedScore = '6'
	var allCards = document.querySelectorAll(".card");

	for(i = 0; i < allCards.length; i++){
		var scoreContentOfAllCardsArray = allCards[i].getAttribute("card-metascore");
	 	if(scoreContentOfAllCardsArray != specifiedScore+0 && scoreContentOfAllCardsArray != specifiedScore+1 && scoreContentOfAllCardsArray != specifiedScore+2 && scoreContentOfAllCardsArray != specifiedScore+3 && scoreContentOfAllCardsArray != specifiedScore+4 && scoreContentOfAllCardsArray !=specifiedScore+5 && scoreContentOfAllCardsArray != specifiedScore+6 && scoreContentOfAllCardsArray != specifiedScore+7 && scoreContentOfAllCardsArray != specifiedScore+8 && scoreContentOfAllCardsArray != specifiedScore+9){
	 		console.log('removed a score of: ' + scoreContentOfAllCardsArray)
			allCards[i].parentNode.removeChild(allCards[i]);
		}
	}

}

function getScore70to79(){
	var specifiedScore = '7'
	var allCards = document.querySelectorAll(".card");

	for(i = 0; i < allCards.length; i++){
		var scoreContentOfAllCardsArray = allCards[i].getAttribute("card-metascore");
	 	if(scoreContentOfAllCardsArray != specifiedScore+0 && scoreContentOfAllCardsArray != specifiedScore+1 && scoreContentOfAllCardsArray != specifiedScore+2 && scoreContentOfAllCardsArray != specifiedScore+3 && scoreContentOfAllCardsArray != specifiedScore+4 && scoreContentOfAllCardsArray !=specifiedScore+5 && scoreContentOfAllCardsArray != specifiedScore+6 && scoreContentOfAllCardsArray != specifiedScore+7 && scoreContentOfAllCardsArray != specifiedScore+8 && scoreContentOfAllCardsArray != specifiedScore+9){
	 		console.log('removed a score of: ' + scoreContentOfAllCardsArray)
			allCards[i].parentNode.removeChild(allCards[i]);
		}
	}

}

function getScore80to89(){
	var specifiedScore = '8'
	var allCards = document.querySelectorAll(".card");

	for(i = 0; i < allCards.length; i++){
		var scoreContentOfAllCardsArray = allCards[i].getAttribute("card-metascore");
	 	if(scoreContentOfAllCardsArray != specifiedScore+0 && scoreContentOfAllCardsArray != specifiedScore+1 && scoreContentOfAllCardsArray != specifiedScore+2 && scoreContentOfAllCardsArray != specifiedScore+3 && scoreContentOfAllCardsArray != specifiedScore+4 && scoreContentOfAllCardsArray !=specifiedScore+5 && scoreContentOfAllCardsArray != specifiedScore+6 && scoreContentOfAllCardsArray != specifiedScore+7 && scoreContentOfAllCardsArray != specifiedScore+8 && scoreContentOfAllCardsArray != specifiedScore+9){
	 		console.log('removed a score of: ' + scoreContentOfAllCardsArray)
			allCards[i].parentNode.removeChild(allCards[i]);
		}
	}

}

function getScore90to100(){
	var specifiedScore = '9'
	var allCards = document.querySelectorAll(".card");

	for(i = 0; i < allCards.length; i++){
		var scoreContentOfAllCardsArray = allCards[i].getAttribute("card-metascore");
	 	if(scoreContentOfAllCardsArray != specifiedScore+0 && scoreContentOfAllCardsArray != specifiedScore+1 && scoreContentOfAllCardsArray != specifiedScore+2 && scoreContentOfAllCardsArray != specifiedScore+3 && scoreContentOfAllCardsArray != specifiedScore+4 && scoreContentOfAllCardsArray !=specifiedScore+5 && scoreContentOfAllCardsArray != specifiedScore+6 && scoreContentOfAllCardsArray != specifiedScore+7 && scoreContentOfAllCardsArray != specifiedScore+8 && scoreContentOfAllCardsArray != specifiedScore+9 && scoreContentOfAllCardsArray != '100'){
	 		console.log('removed a score of: ' + scoreContentOfAllCardsArray)
			allCards[i].parentNode.removeChild(allCards[i]);
		}
	}

}

function getRatingR(){
	var specifiedRating = 'R';
	var allCards = document.querySelectorAll(".card");

	for(i = 0; i < allCards.length; i++){
		var ratingContentOfAllCardsArray = allCards[i].getAttribute("card-rated");
	 	if(ratingContentOfAllCardsArray != specifiedRating){
	 		console.log('removed a rating of: ' + ratingContentOfAllCardsArray)
			allCards[i].parentNode.removeChild(allCards[i]);
		}
	}
}

function getRatingPG13(){
	var specifiedRating = 'PG-13';
	var allCards = document.querySelectorAll(".card");

	for(i = 0; i < allCards.length; i++){
		var ratingContentOfAllCardsArray = allCards[i].getAttribute("card-rated");
	 	if(ratingContentOfAllCardsArray != specifiedRating){
	 		console.log('removed a rating of: ' + ratingContentOfAllCardsArray)
			allCards[i].parentNode.removeChild(allCards[i]);
		}
	}
}

function getRatingPG(){
	var specifiedRating = 'PG';
	var allCards = document.querySelectorAll(".card");

	for(i = 0; i < allCards.length; i++){
		var ratingContentOfAllCardsArray = allCards[i].getAttribute("card-rated");
	 	if(ratingContentOfAllCardsArray != specifiedRating){
	 		console.log('removed a rating of: ' + ratingContentOfAllCardsArray)
			allCards[i].parentNode.removeChild(allCards[i]);
		}
	}
}

function getRatingG(){
	var specifiedRating = 'G';
	var allCards = document.querySelectorAll(".card");

	for(i = 0; i < allCards.length; i++){
		var ratingContentOfAllCardsArray = allCards[i].getAttribute("card-rated");
	 	if(ratingContentOfAllCardsArray != specifiedRating){
			allCards[i].parentNode.removeChild(allCards[i]);
		}
	}
}

function getGenreAnimation(){
	var specifiedGenre = 'Animation';
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








