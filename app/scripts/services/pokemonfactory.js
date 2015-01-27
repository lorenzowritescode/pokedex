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
    var apiUrl = 'http://pokeapi.co/api/v1';
    var pokeFactory = {};
    
    pokeFactory.getAll = function () {
        return $http.get(apiUrl + '/pokedex/1');
    };
    
    pokeFactory.getPokemon = function (pokeNumber) {
        return $http.get(apiUrl + '/pokemon/' + pokeNumber);
    };
    
    return pokeFactory;
  }]);
