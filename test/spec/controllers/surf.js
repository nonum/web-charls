'use strict';

describe('Controller: SurfCtrl', function () {

  // load the controller's module
  beforeEach(module('webAppApp'));

  var SurfCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SurfCtrl = $controller('SurfCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SurfCtrl.awesomeThings.length).toBe(3);
  });
});
