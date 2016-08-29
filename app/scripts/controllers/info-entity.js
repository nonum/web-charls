'use strict';

/**
 * @ngdoc function
 * @name webAppApp.controller:InfoEntityCtrl
 * @description
 * # InfoEntityCtrl
 * Controller of the webAppApp
 */
angular.module('webAppApp')
  .controller('InfoEntityCtrl', [ '$scope', '$routeParams', '$rootScope', function ($scope, $routeParams,$rootScope) {


 	
	$scope.metaData = $rootScope.metaData[$routeParams.entity];
	$scope.sectionActive = $scope.metaData[0].section;


 	$scope.entity = $rootScope.entities[$routeParams.entity];
 	$scope.sectionActive = !!$scope.sectionActive ? $scope.sectionActive : $scope.entity[0].id;
 	
 	

 }]);