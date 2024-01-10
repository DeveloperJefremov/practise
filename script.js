const numberOfFilms = +prompt ('How much films have you already watched?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt ('Last film you watched?', ''),
    b= prompt ('Whats your mark?', ''),
    c = prompt ('Last film you watched?', ''),
    d = prompt('Whats your mark?', '');

    personalMovieDB.movies[a] = b;
    personalMovieDB.movies[c] = d;

    console.log(personalMovieDB);