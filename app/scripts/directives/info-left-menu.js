'use strict';

/**
 * @ngdoc directive
 * @name webAppApp.directive:infoLeftMenu
 * @description
 * # infoLeftMenu
 */
angular.module('webAppApp')
  .directive('infoLeftMenu', function () {
    return {
      templateUrl: 'views/info-left-menu.html',
 		restrict: 'E',
 		scope: {
 			metaData: '=metaData',
 			entities: '=entity',
 			sectionActive: '=sectionActive'
 		},
 		controller : function ($scope, $filter, $rootScope,$location,$anchorScroll) {

			$scope.fields = $filter('filter')($scope.metaData, { name: $scope.sectionActive})[0].sub_sections;
						
			$scope.entity = $filter('filter')($scope.entities, { id: $scope.sectionActive})[0];
			$scope.$on('myCustomEvent2', function (event, data) {
         $scope.sectionActive = data.someProp;
         $scope.fields = $filter('filter')($scope.metaData, { name: $scope.sectionActive})[0].sub_sections;
            
         $scope.entity = $filter('filter')($scope.entities, { id: $scope.sectionActive})[0];
      });
			$scope.gotoAnchor = function(x) {
            $rootScope.sectionActive = $scope.sectionActive;
      			var newHash = 'anchor' + x;
      			if ($location.hash() !== newHash) {
        			// set the $location.hash to `newHash` and
        			// $anchorScroll will automatically scroll to it
	        		$location.hash('anchor' + x);
      			} else {
	        		// call $anchorScroll() explicitly,
        			// since $location.hash hasn't changed
        			$anchorScroll();
      			}
      		};	
 		}
    };
  });
