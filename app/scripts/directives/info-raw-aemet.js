'use strict';

/**
 * @ngdoc directive
 * @name webAppApp.directive:infoRawAemet
 * @description
 * # infoRawAemet
 */
angular.module('webAppApp')
  .directive('infoRawAemet', function ($filter,$compile,$http, x2js) {
 	return {
 		 link: function(scope, element, attrs){

           scope.getContentUrl = function() {
               return 'views/info-raw-' + scope.type + '.html';
           }

            var template = '<div ng-include="getContentUrl()"></div>';

            var linkFn = $compile(template);
            var content = linkFn(scope);
            element.append(content);
        },
 		restrict: 'E',
 		scope: {
 			entity: '=entity',
 			field: '=field',
 			type: '=type'
 		},
 		controller : function ($scope) {
 			
 		}
 	};
});