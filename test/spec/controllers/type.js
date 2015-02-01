'use strict';

describe('Controller: TypectrlCtrl', function () {

  // load the controller's module
  beforeEach(module('pokedexApp'));

  var TypectrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TypectrlCtrl = $controller('TypectrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
