// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const mapped = moviesArray.map(movie => movie.director);
  console.log(mapped);
  return mapped;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const filteredArray = moviesArray.filter(
    movie =>
      movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
  );
  return filteredArray.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  const averageArray =
    moviesArray.reduce((acc, cur) => {
      return acc + cur.score;
    }, 0) / moviesArray.length;

  return Number(averageArray.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const drama = moviesArray.filter(movie => movie.genre.includes('Drama'));

  const averageDrama = scoresAverage(drama);
  return averageDrama;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const copyMoviesYear = [...moviesArray];
  const moviesYear = copyMoviesYear.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    } else {
      return a.year - b.year;
    }
  });
  return moviesYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const onlyTitle = [];
  const moviesAlphabetically = moviesArray.sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  return moviesAlphabetically;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
