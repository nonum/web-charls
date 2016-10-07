'use strict';

/**
 * @ngdoc service
 * @name webAppApp.windguru
 * @description
 * # windguru
 * Service in the webAppApp.
 */
angular.module('webAppApp')
  .service('windguru', ['$resource',  function ($resource) {
      return $resource('http://graphical.weather.gov/xml/sample_products/browser_interface/ndfdXMLclient.php?listLatLon=38.99,-77.02 39.70,-104.80 47.6,-122.30&product=time-series&begin=2004-01-01T00:00:00&end=2013-04-20T00:00:00&Unit=e&maxt=maxt&mint=mint', {}, {
        get: {
          method: 'GET',
          params: {
            id: null
          },
          isArray: true,
          transformResponse: function (data, headers) {
            var jsonData = JSON.parse(data);
            //$routeParams.total = jsonData.total;
            return jsonData; 
          }
        }
      });
  }]);

