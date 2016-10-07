'use strict';

/**
 * @ngdoc service
 * @name webAppApp.aemet
 * @description
 * # aemet
 * Service in the webAppApp.
 */
angular.module('webAppApp')
  .service('aemet', function($http, x2js){
    return {
        get: function (file) {
        	$http.get(file).then(
        		function(cnv) {
        			 var x2js = new X2JS();

  					var aftCnv = x2js.xml_str2json(cnv.data);

  					return aftCnv.root.prediccion.dia;
        	}); 
        }
    };
  });
