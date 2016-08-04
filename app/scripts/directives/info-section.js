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
 			metaData: '=metaData',
 			entities: '=entity',
 			sectionActive: '=sectionActive'
 		},
 		controller : function ($scope,$filter) {

			$scope.entityRaw = $filter('filter')($scope.entities, { id: $scope.sectionActive})[0];
 			$scope.clickSection = function(section) {
 				$scope.sectionActive = section;
 				$scope.entityRaw = $filter('filter')($scope.entities, { id: $scope.sectionActive})[0];
 			};
 		}
 	};
 });
