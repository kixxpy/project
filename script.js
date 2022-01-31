"use strict";

let numberOfFilms;

function start() {
    numberOfFilms =  +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms =  +prompt('Сколько фильмов вы уже посмотрели?', ''); 
    }
}


const personalMoviDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms(){

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
}
// rememberMyFilms();


function detectPersonalLevel() {

    if (personalMoviDB.count < 10) {
        console.log('Просмотренно довольно мало фильмов');
    } else if (personalMoviDB.count > 10 && personalMoviDB.count <30) {
        console.log('Вы классный зритель!');
    } else if (personalMoviDB.count > 30) {
        console.log('Вы киноман!!!');
    } else {
        console.log('Произошла ошибка');
    }
}
// detectPersonalLevel();


function showMyDB (fee) {
    if (!fee) {
        console.log(personalMoviDB);
    }
}
showMyDB(personalMoviDB.privat);

function writeYourGenres() {
    for(let i = 1; i <=3; i++) {
        const gener = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMoviDB.genres[i - 1] = gener;
    }
}
writeYourGenres();