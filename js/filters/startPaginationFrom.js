(function() {
	"use strict";

	function startPaginationFrom() {
	    return function(input, start) {
	        start = +start;
	        return input.slice(start);
	    }
	}

	angular.module('myApp').filter('startPaginationFrom', [startPaginationFrom]);
})();