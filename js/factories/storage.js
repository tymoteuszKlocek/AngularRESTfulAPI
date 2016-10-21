(function() {
'use strict';


function movieStorage($localStorage) {

    var movieArray = $localStorage.movieArray || [] ;
    var service = {
        addToArray: addToArray,
        deleteItemFromArray: deleteItemFromArray,
        clearMyStorage: clearMyStorage,
        getArray: getArray,
        movieArray: movieArray,
    };

    return service;

    function addToArray (value) {
        if (movieArray.includes(value) !== true) {
            movieArray.push(value);
            $localStorage.movieArray = movieArray;
        }
    }

    function deleteItemFromArray (itemIndex) {
        movieArray.splice(itemIndex,1);
    }

    function clearMyStorage () {
        movieArray.length = 0;
        // movieArray.splice(0,movieArray.length); - to tez świetnie działa
    }

    function getArray() {
        return movieArray;
    }

}

angular.module('myApp').factory('movieStorage', ['$localStorage', movieStorage]);
})();
