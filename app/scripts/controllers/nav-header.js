'use strict';

/**
 * @ngdoc function
 * @name webAppApp.controller:NavHeaderCtrl
 * @description
 * # NavHeaderCtrl
 * Controller of the webAppApp
 */
angular.module('webAppApp')
  .controller('NavHeaderCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
    
    $scope.nav = [];

    
    angular.forEach($scope.entities, function(item) {
       var navItem = {
         name: item.name, 
         route: item.id, 
         icon: 'glyphicon glyphicon-' + item.icon
       };
       $scope.nav.push(navItem);
    });

    $scope.isActive = function (viewLocation) { 
    	return viewLocation === $location.path();
    };
    $scope.changeTab = function () { 
        $rootScope.sectionActive = null;
    };

  }]);
