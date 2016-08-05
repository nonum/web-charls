'use strict';

/**
 * @ngdoc directive
 * @name webAppApp.directive:infoRaw
 * @description
 * # infoRaw
 */
 angular.module('webAppApp')
 .directive('infoRaw', function ($filter) {
 	return {
 		templateUrl: 'views/info-raw.html',
 		restrict: 'E',
 		scope: {
 			entity: '=entity',
 			field: '=field'
 		},
 		controller : function ($scope) {

 			$scope.oneAtATime = false;

			var a = $filter('translate')('curriculum.label.cp');

 			$scope.raw = {
 				label : $scope.field.label,
 				value : $scope.entity[$scope.field.name]
 			};

 			$scope.status = {
 				isCustomHeaderOpen: false,
 				isFirstOpen: true,
 				isFirstDisabled: false
 			};
 		}
 	};
 });
