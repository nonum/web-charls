'use strict';

/**
 * @ngdoc function
 * @name webAppApp.controller:InfoEntityCtrl
 * @description
 * # InfoEntityCtrl
 * Controller of the webAppApp
 */
angular.module('webAppApp')
  .controller('InfoEntityCtrl', [ '$scope', '$routeParams', 'locale', function ($scope, $routeParams,locale ) {


 	locale.get('meta-data').then(function (msg) {
 		$scope.metaData = msg.data[$routeParams.entity];
 		$scope.sectionActive = $scope.metaData[0].section;
 	});

 	locale.get($routeParams.entity).then(function (msg) {
 		$scope.entity = msg.data;
 		$scope.sectionActive = !!$scope.sectionActive ? $scope.sectionActive : $scope.entity[0].id;
 	});
 	

 }]);