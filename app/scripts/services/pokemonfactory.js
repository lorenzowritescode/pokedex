'use strict';

/**
 * @ngdoc service
 * @name firetodoApp.PokemonFactory
 * @description
 * # PokemonFactory
 * Factory in the firetodoApp.
 */
angular.module('firetodoApp')
  .factory('PokemonFactory', [ '$http', function ($http) {
    var pokeFactory = {};
    
    pokeFactory.getPokemons = function () {
        return $http.get('http://pokeapi.co/api/v1/egg/1/');
    };
    
    return pokeFactory;
  }]);
