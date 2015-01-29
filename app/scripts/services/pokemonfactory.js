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
      var baseUrl = 'http://pokeapi.co',
          apiUrl = baseUrl + '/api/v1',
          pokeFactory = {};
    
    pokeFactory.getAll = function () {
        return connect(apiUrl + '/pokedex/1');
    };
    
    pokeFactory.getPokemon = function (pokeNumber) {
        return connect(apiUrl + '/pokemon/' + pokeNumber);
    };
      
    pokeFactory.getURI = function (resourceURI) {
        return connect(baseUrl + resourceURI);   
    }
    
    function connect (path) {
        return $http.get(path);
    }
    
    return pokeFactory;
  }]);
