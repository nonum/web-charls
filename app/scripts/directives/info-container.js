'use strict';

/**
 * @ngdoc directive
 * @name webAppApp.directive:infoContainer
 * @description
 * # infoContainer
 */
 angular.module('webAppApp')
 .directive('infoContainer', function () {
 	return {
 		templateUrl: 'views/info-container.html',
 		restrict: 'E',

 		scope: {
 			metaData: '=metaData',
 			entity: '=entity'
 		},
 		controller : function ($scope) {


 		}
 	};
 });
