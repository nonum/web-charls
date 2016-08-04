'use strict';

/**
 * @ngdoc directive
 * @name webAppApp.directive:infoRaw
 * @description
 * # infoRaw
 */
 angular.module('webAppApp')
 .directive('infoRaw', function () {
 	return {
 		templateUrl: 'views/info-raw.html',
 		restrict: 'E',
 		scope: {
 			entity: '=entity',
 			field: '=field'
 		},
 		controller : function ($scope) {

 			$scope.oneAtATime = false;

 			$scope.raw = {
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
