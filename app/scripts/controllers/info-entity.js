'use strict';

/**
 * @ngdoc function
 * @name webAppApp.controller:InfoEntityCtrl
 * @description
 * # InfoEntityCtrl
 * Controller of the webAppApp
 */
 angular.module('webAppApp')
 .controller('InfoEntityCtrl', [ '$scope', '$routeParams', '$rootScope', '$filter', function ($scope, $routeParams,$rootScope,$filter) {

 	
 	$scope.$on('change-tab', function (event, data) {
 		$scope.$broadcast('change-menu', data);
 		
 	});
 	
 	if(!!$rootScope.activeMenu && $rootScope.activeMenu === $routeParams.id) {
 	} else {
 	  $rootScope.activeTab = $filter('filter')($scope.entities.menu, { id: $routeParams.id })[0].tabs[0];
 	  $rootScope.activeTabId = $rootScope.activeTab;
 	}
 	
 }]);