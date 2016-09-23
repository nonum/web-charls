'use strict';

/**
 * @ngdoc directive
 * @name webAppApp.directive:infoContainer
 * @description
 * # infoContainer
 */
 angular.module('webAppApp')
 .directive('infoContainer', function () {
 	return {
 		templateUrl: 'views/info-container.html',
 		restrict: 'E',

 		scope: {
 			metaData: '=metaData',
 			entity: '=entity',
 			sectionActive: '=sectionActive'
 		},
 		controller : function ($scope) {

 			$scope.$on('myCustomEvent', function (event, data) {
  				$scope.$broadcast('myCustomEvent2', { someProp: data });
			});
 		}
 	};
 });
