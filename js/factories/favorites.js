(function() {
'use strict';

function favorites(movieStorage) {

    var changeFavorite = function (movie) {
        var index = movieStorage.movieArray.indexOf(movie);
        var fav = movieStorage.movieArray[index].favorite;
        movieStorage.movieArray[index].favorite = (fav === false);
    };

    return {
        changeFavorite: changeFavorite
    };
}

angular.module("myApp").factory("favorites", ['movieStorage', favorites]);
})();