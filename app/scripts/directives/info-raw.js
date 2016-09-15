'use strict';

/**
 * @ngdoc directive
 * @name webAppApp.directive:infoRaw
 * @description
 * # infoRaw
 */
 angular.module('webAppApp')
 .directive('infoRaw', function ($filter,$compile,$http, x2js) {
 	return {
 		 link: function(scope, element, attrs){

           scope.getContentUrl = function() {
               return 'views/info-raw-' + scope.type + '.html';
           }

            var template = '<div ng-include="getContentUrl()"></div>';

            var linkFn = $compile(template);
            var content = linkFn(scope);
            element.append(content);
        },
 		restrict: 'E',
 		scope: {
 			entity: '=entity',
 			field: '=field',
 			type: '=type'
 		},
 		controller : function ($scope) {

 			$scope.oneAtATime = false;

			var a = $filter('translate')('curriculum.label.cp');

			$scope.getComplexField = function(name){
				var title = '';
				angular.forEach($scope.field[name], function(item){
					title += $scope.entity[item] + ' - ';
				});
				return title.substring(0,title.length-3);
			};

			switch($scope.type) {
				case 'simple-field':
					$scope.raw = {
	 					type: $scope.field.type,
 						label : $scope.field.label,
 						value : $scope.entity[$scope.field.name]
 					};
 				break;
 				case 'complex-field':
 				 	switch($scope.field.type) {
 				 		case 'complex':
 				 		$scope.raw = {
 							title: $scope.getComplexField('name'),
 							subtitle: '(' + $scope.getComplexField('subname') + ')'
 						};
 						break;
 						case 'simple':
 						$scope.raw = {
 							description : $scope.entity[$scope.field.name]
 						};
 						break;
 						case 'complex-label':
 						$scope.raw = {
 							description : $filter('translate')( $scope.field.label,$scope.entity)
 						};
 				 	}
 				break;
 				case 'group-list':
 				case 'simple-list':
 				break;
 				case 'youtube':
 					$scope.theBestVideo = $scope.entity.cam;
 					$scope.playerVars = {
    					autoplay: 1
					};
				break;
 				case 'aemet':
 					// $http.get("http://www.aemet.es/xml/municipios_h/localidad_h_33004.xml",{
 					$http.get("locale/localidad_h_33004.xml",{
						transformResponse: function (cnv) {
						  
						  var aftCnv = x2js.xml_str2json(cnv);
						  return aftCnv;
						}
					}).success(function (response) {
						console.log(response);
						console.log($scope.field);
						$scope.prediccion = response.root.prediccion; 
					});

 				break;

			};
 				

 			$scope.status = {
 				isCustomHeaderOpen: false,
 				isFirstOpen: true,
 				isFirstDisabled: false
 			};
 		},
 
 	};
 });
