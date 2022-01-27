"use strict";

const numberOfFilms =  +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMoviDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//     b = +prompt('На сколько оцните его?', ''),
//     c = prompt('Один из последних просмотренных фильмов?', ''),
//     d = +prompt('На сколько оцените его?', '');

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцните его?', '');
        
    if ( a != '' && b != '' && a != null && b != null && a.length < 50 && b.length < 50) {
        personalMoviDB.movies[a] = b;
        console.log('yes');
    } else {
        console.log('ne');
        i--;
    }

}
console.log(personalMoviDB);

if (personalMoviDB.count < 10) {
    console.log('Просмотренно довольно мало фильмов');
} else if (personalMoviDB.count > 10 && personalMoviDB.count <30) {
    console.log('Вы классный зритель!');
} else if (personalMoviDB.count > 30) {
    console.log('Вы киноман!!!');
} else {
    console.log('Произошла ошибка');
}
