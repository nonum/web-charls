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
    
    $scope.nav = [{ name: 'Curriculum', route: 'curriculum', icon: 'glyphicon glyphicon-user'},
    { name: 'Desarrollo', route: 'development', icon: 'glyphicon glyphicon-console'},
    { name: 'Mareas', route: 'surf', icon: 'glyphicon glyphicon-cloud'},
    { name: 'Contacto', route: 'contact', icon: 'glyphicon glyphicon-envelope'}];


    $scope.isActive = function (viewLocation) { 
    	return viewLocation === $location.path();
    };
    $scope.changeTab = function () { 
        $rootScope.sectionActive = null;
    };
  }]);
