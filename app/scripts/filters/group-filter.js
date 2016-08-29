'use strict';

/**
 * @ngdoc filter
 * @name webAppApp.filter:groupFilter
 * @function
 * @description
 * # groupFilter
 * Filter in the webAppApp.
 */
angular.module('webAppApp')
  .filter('groupFilter', function () {
    return function (input,group) {
      var array = [];
      angular.forEach(input, function(item){
        if(item[group.key] == group.element){
          array.push(item);
        }
      });
      return array;
    };
  });
