'use strict';

/**
 * @ngdoc function
 * @name webAppApp.controller:CurriculumCtrl
 * @description
 * # CurriculumCtrl
 * Controller of the webAppApp
 */
 angular.module('webAppApp')
 .controller('CurriculumCtrl', [ '$scope', 'locale', function ($scope, locale) {




 	locale.get('meta-data').then(function (msg) {
 		$scope.metaData = msg.data['curriculum'];
 		$scope.sectionActive = $scope.metaData[0].section;
 	});

 	locale.get('curriculum').then(function (msg) {
 		$scope.curriculum = msg.data;
 		$scope.sectionActive = !!$scope.sectionActive ? $scope.sectionActive : $scope.curriculum[0].id;
 	});
 	

 }]);
 
