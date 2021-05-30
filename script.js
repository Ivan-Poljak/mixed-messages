function generateRandomNumber(num) {
	return Math.floor(Math.random() * num);
}

const entertainment = {
	shows: ['Movies', 'TV Shows'],
	type: ['Action', 'Comedy', 'Romance', 'Sci-fi'],

	actionMovies: ['The Matrix (1999)', 'Die Hard (1998)', 'Rambo First Blood (1982)', 'John Wick (2014)', 'Live Free or Die Hard (2007)'],
	comedyMovies: ['The Hangover (2009)', 'Grown Ups (2010)', 'Ted (2012)', 'Superbad (2007)', 'Dirty Grandpa (2016)'],
	romanceMovies: ['Crazy, Stupid, Love (2011)', 'Endless Love (2014)', 'A Star Is Born (2018)', 'La La Land (2016)', 'Life Is Beautiful (1997)'],
	sci_fi_Movies: ['Star Wars (all of them)', 'Blade Runner 2049 (2017)', 'Interstelar (2014)', 'Avatar (2009)', 'Arrival (2016)'],

	actionSeries: ['NCIS', 'Vikings', 'SEAL Team', 'Prison Break'],
	comedySeries: ['Seinfeld', 'Two and a Half Men', 'The Fresh Princ of Bel-Air', 'Married.. with Children', 'The Office'],
	romanceSeries: ['How I Met Your Mother', 'Friends', 'One Tree Hill', 'A Million Little Things', 'This Is Us'],
	sci_fi_Series: ['The Mandalorian', 'The 100', 'The X-Files', 'Star Trek', 'Westworld']
};

//Here will be stored recommended movies or series
let recommendation = [];

for (let objKeys in entertainment) {

	//Num argument of generateRandom function
	let numArgument = generateRandomNumber(entertainment[objKeys].length);
	//Index of element in array
	let element = entertainment[objKeys][numArgument];

	//Randomly selected element in objects shows key
	switch(objKeys) {
		case 'shows':
			recomendation.push(element);
		break;
	}

	//Checks if first element in recommendation array is 'Movies' or 'TV Shows' and pushs randomly pushed objects type key with string
	if (recommendation[0] == 'Moives') {
		switch(objKeys) {
			case 'type':
				recommendation.push(element + 'Movie');
			break;
		}
	} else if (recommendation[0] == 'TV Shows') {
		switch(objKeys) {
			case 'type':
				recommendation.push(elements + 'TV Shows');
			break;
		}
	}

	//Case movies - choose between types of movies
	if (recommendation[0] == 'Movies' && recommendation[1] == 'Action Movie') {
		switch(objKeys) {
			case 'actionMovies':
				recommendation.push(element);
			break;
		}
	} else if (recommendation[0] == 'Movies' && recommendation[1] == 'Comedy Movie') {
		switch(objKeys) {
			case 'comedyMovies':
				recommedation.push(element);
			break;
		}
	} else if (recommendation[0] == 'Movies' && recommendation[1] == 'Romance Movie') {
		switch(objKeys) {
			case 'romanceMovies':
				recommendation.push(element);
			break;
		}
	} else if (recommendation[0] == 'Movies' && recommendation[1] == 'Sci-fi Movie') {
		switch(objKeys) {
			case 'sci_fi_Movies:
				recommendation.push(element);
			break;
		}
	}

	//Case TV Shows - choose between types of TV Shows
	if (recommendation[0] == 'TV Shows' && recommendation[1] == 'Action TV Show') {
		switch(objKeys) {
			case 'actionSeries':
				recommendation.push(element);
			break;
		}
	} else if (recommendation[0] == 'TV Shows' && recommendation[1] == 'Comedy TV Shows') {
		switch(objKeys) {
			case 'comedySeries':
				recommendation.push(element);
			break;
		}
	} else if (recommendation[0] == 'TV Shows' && recommendation[1] == 'Romance TV Shows') {
		switch(objKeys) {
			case 'romanceSeries':
				recommendation.push(element);
			break;
		}
	} else if (recommendation[0] == 'TV Shows' && recommendation[1] == 'Sci-fi TV Shows') {
		switch(objKeys) {
			case 'sci_fi_Series':
				recommendation.push(element);
			break;
		}
	}
}

