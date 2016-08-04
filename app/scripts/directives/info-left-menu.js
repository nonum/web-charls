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
 		controller : function ($scope, $filter) {

			$scope.fields = $filter('filter')($scope.metaData, { name: $scope.sectionActive})[0].sub_sections;
						
			$scope.entity = $filter('filter')($scope.entities, { id: $scope.sectionActive})[0];
				
 		}
    };
  });
