'use strict';

/**
 * @ngdoc directive
 * @name webAppApp.directive:infoSection
 * @description
 * # infoSection
 */
 angular.module('webAppApp')
 .directive('infoSection', function () {
 	return {
 		templateUrl: 'views/info-section.html',
 		restrict: 'E',

 		scope: {
 			sections: '=sections',
 			entity: '=entity'
 		},
 		controller : function ($scope) {

 			$scope.clickSection = function(section) {
 				angular.forEach($scope.sections, function(item) {
 					item.active = (item.section_name == section);
 				}); 
 			};
 		}
 	};
 });
