'use strict';

/**
 * @ngdoc filter
 * @name webAppApp.filter:hourFromNow
 * @function
 * @description
 * # hourFromNow
 * Filter in the webAppApp.
 */
angular.module('webAppApp')
  .filter('hourFromNow', function () {
    return function (input) {
    	var output = [];
    	var dateNow = new Date();
    	angular.forEach(input, function(item){
    		if(item._periodo >= dateNow.getHours()) {
    			output.push(item);
    		}
    	});
      return output;
    };
  });
