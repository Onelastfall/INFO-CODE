/* Her kan dere implementere en søkefunksjon. For eksempel:
function search_for_X() {
}
*/

function search_for_title(searchTitle, movieDict){
	results = [];

	for (key in movieDict){
		movieDetails = movieDict[key];
		if (movieDetails.otitle.toLowerCase().match(searchTitle.toLowerCase()))	{
			 results.push(movieDetails);
		}
	
	}
	return results;
}

/* Her kan dere implementere en display function som viser resulatetene av søket. For eksempel:
function display_X() {
}
*/

var searchResults = [
]

window.onload = function() {
	query_params = get_query_string_parameters();

	search_results = movies_object;

	// denne variablen lagres moviedetaljer fra søkefunksjonen.
	var foundMovies;
	
	if (query_params.film_title) {
     	film_title = document.getElementById("film_title");
		//Her kan dere for eksempel kalle en søkefunksjon som søker for tittel.

		foundMovies = search_for_title(query_params.film_title, search_results);
    }
	
	if (query_params.actor) {
        actor = document.getElementById("actor");
		actor.innerHTML = query_params.actor;
    }
	
	if (query_params.director) {
		director = document.getElementById("director");
		director.innerHTML = query_params.director;
    }
	
	if (query_params.genre) {
        genre = document.getElementById("genre");
		genre.innerHTML = query_params.genre;
    }
	
	if (query_params.country) {
        country = document.getElementById("country");
		country.innerHTML = query_params.country;
    }
	
	//Her kan dere for eksempel kalle en (display) funksjon som viser søkeresultater 
	searchResults = foundMovies;
	display();
}