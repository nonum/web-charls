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
 			entity: '=entity',
 			metaData: '=metaData'
 		},
 		controller : function ($scope) {

 			$scope.oneAtATime = false;

 			$scope.fields = $scope.metaData.fields;
 			$scope.status = {
 				isCustomHeaderOpen: false,
 				isFirstOpen: true,
 				isFirstDisabled: false
 			};
 		}
 	};
 });
