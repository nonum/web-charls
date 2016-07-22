'use strict';

/**
 * @ngdoc function
 * @name webAppApp.controller:DevelopmentCtrl
 * @description
 * # DevelopmentCtrl
 * Controller of the webAppApp
 */
angular.module('webAppApp')
  .controller('DevelopmentCtrl', [ '$scope', function ($scope) {
    $scope.sections = [
 		{ name: 'Curriculum Vitae', active: true, message: 'Este es el curriculum vitae', id: 'tab1'},
 		{ name: 'Curriculum técnico', active: false, message: 'Este es el curriculum técnico', id: 'tab2'}
 	];

	$scope.menus = [{ name: 'Carlos Gallardo', 
							  type: '', 
							  subMenus : [
							  	{name: 'subMenu1'},
							  	{name: 'subMenu2'},
							  	{name: 'subMenu3'},
							  	], 
							  subname: 'Curriculum'}
							  ];			   	

    $scope.metaData = {
    	sections: $scope.sections,
    	menus: $scope.menus
    };
  }]);
