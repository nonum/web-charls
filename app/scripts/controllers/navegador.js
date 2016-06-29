'use strict';

/**
 * @ngdoc function
 * @name webAppApp.controller:NavegadorCtrl
 * @description
 * # NavegadorCtrl
 * Controller of the webAppApp
 */
angular.module('webAppApp')
  .controller('NavegadorCtrl', ['$scope', function ($scope) {
    
    $scope.nav = [{ name: 'Curriculum', route: 'curriculum'},
    { name: 'Desarrollo Web angularjs', route: 'development'},
    { name: 'Estado del mar', route: 'surf'},
    { name: 'Contacto', route: 'contact'}];


     $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
  }]);
