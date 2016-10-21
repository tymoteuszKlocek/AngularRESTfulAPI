(function() {
	"use strict";

	function checkmark() {
		var checkMark = '\u2713',
			ballotX = '\u2718';

	    return function(input) {
	        return input ? checkMark : ballotX;
	    };
	}

	angular.module('myApp').filter('checkmark',[checkmark]);
})();