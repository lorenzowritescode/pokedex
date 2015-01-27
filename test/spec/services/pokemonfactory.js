'use strict';

describe('Service: PokemonFactory', function () {

  // load the service's module
  beforeEach(module('firetodoApp'));

  // instantiate service
  var PokemonFactory;
  beforeEach(inject(function (_PokemonFactory_) {
    PokemonFactory = _PokemonFactory_;
  }));

  it('should do something', function () {
    expect(!!PokemonFactory).toBe(true);
  });

});
