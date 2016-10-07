'use strict';

/**
 * @ngdoc directive
 * @name webAppApp.directive:infoRaw
 * @description
 * # infoRaw
 */
 angular.module('webAppApp')
 .directive('infoRaw', function ($filter,$compile,$http, x2js,$timeout) {
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
 			field: '=field',
 			fields: '=fields',
 			item: '=item',
      list: '=list',
 			type: '=type'
 		},
 		controller : function ($scope) {

 			$scope.oneAtATime = false;

			$scope.getComplexField = function(name){
				var title = '';
				angular.forEach($scope.field[name], function(item){
					title += $scope.entity[item] + ' - ';
				});
				return title.substring(0,title.length-3);
			};

      			
			/** Esta función se puede usar como comparator en el filter **/
   			$scope.comparator = function(actual, expected) {
     			if (normalize(actual).indexOf(normalize(expected))>=0) {
          			return true;
        		} else {
          			return false;
        		}
    		};
         $scope.aemet = [];
      if($scope.type === 'aemet-field') {
        $http.get($scope.field.value).then(
            function(cnv) {
              var x2js = new X2JS();

              var aftCnv = x2js.xml_str2json(cnv.data);

              $scope.aemet = aftCnv.root.prediccion.dia;

             /* getInfoEntity: function() {*/
                var low = null;
                var high = null;
                var count = 0;
                angular.forEach($scope.aemet, function(day){
                  count += day.temperatura.length;
                  angular.forEach(day.temperatura, function(temperatura) {
                    if(low == null || low > temperatura.__text) {
                    low = temperatura.__text;
                  }
                  if(high == null || high < temperatura.__text) {
                    high = temperatura.__text;
                  }
                  
                  });
                  $scope.infoEntity = [];
                  for(var i = high; i >= low; i--) {
                    $scope.infoEntity.push(i);
                  }
                });
                count = count * 35;
                $scope.aemetStyle = {   width: count + 'px' };
             /* $scope.infoEntity = getInfoEntity();*/
          }); 
      }
 			$scope.status = {
 				isCustomHeaderOpen: false,
 				isFirstOpen: true,
 				isFirstDisabled: false
 			};
 		},
 
 	};
 });
