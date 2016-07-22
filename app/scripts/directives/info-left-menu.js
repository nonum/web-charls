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
 			entities: '=entity'
 		},
 		controller : function ($scope, $filter) {

			$scope.fields = $filter('filter')($scope.metaData, { active: true})[0].sub_section;
			$scope.entity = $filter('filter')($scope.entities, { active: true})[0];
				
 		}
    };
  });
