'use strict';

/**
 * @ngdoc directive
 * @name webAppApp.directive:infoTag
 * @description
 * # infoTag
 */
angular.module('webAppApp')
  .directive('infoTag', function () {
 	return {
 		templateUrl: 'views/info-tag.html',
 		restrict: 'E',

 		scope: {
 			metaData: '=metaData',
 			entities: '=entity',
 			sectionActive: '=sectionActive'
 		},
 		controller : function ($scope,$filter) {

			$scope.entityRaw = $filter('filter')($scope.entities, { id: $scope.sectionActive})[0];
			$scope.metaDataRaw = $filter('filter')($scope.metaData, { name: $scope.sectionActive})[0];
 			$scope.clickSection = function(section) {
 				$scope.sectionActive = section;
 				$scope.entityRaw = $filter('filter')($scope.entities, { id: $scope.sectionActive})[0];
 				$scope.metaDataRaw = $filter('filter')($scope.metaData, { name: $scope.sectionActive})[0];
 			};
 		}
 	};
 });
