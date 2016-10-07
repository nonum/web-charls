'use strict';

/**
 * @ngdoc directive
 * @name webAppApp.directive:infoSection
 * @description
 * # infoSection
 */
 angular.module('webAppApp')
 .directive('infoSection', function ($timeout,$compile) {
 	return {
 		link: function(scope, element, attrs){

           scope.getContentUrl = function() {
           	   var section = scope.type.contains('list') ? 'list' : 'field';
           	   section = scope.type.contains('group') ? 'group' : section;
               return 'views/info-section-' + section + '.html';
           }

            var template = '<div ng-include="getContentUrl()"></div>';

            var linkFn = $compile(template);
            var content = linkFn(scope);
            element.append(content);
        },
 		
 		restrict: 'E',
 		scope: {
 			section: '=section',
 			type: '=type'
 		},
 		controller : function ($scope) {

 			$scope.oneAtATime = false;
 			
 			
 		}
 	};
 });
