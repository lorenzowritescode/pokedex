'use strict';

/**
 * @ngdoc service
 * @name pokedexApp.PokemonFactory
 * @description
 * # PokemonFactory
 * Factory in the pokedexApp.
 */
angular.module('pokedexApp')
.factory('PokemonFactory', 
         ['$http', 
          '$cacheFactory',
          PokeFactory]);

function PokeFactory ($http, $cacheFactory) {
    var baseUrl = 'http://pokeapi.co',
        apiUrl = baseUrl + '/api/v1',
        pokedex = $cacheFactory('pokedex'),
        pokemon = $cacheFactory('pokemon'),
        moves = $cacheFactory('moves'),
        pokeFactory = {};

    pokeFactory.getAll = function () {
        return tryCache(pokedex,
                        'all',
                        apiUrl + '/pokedex/1')
    };

    pokeFactory.getPokemon = function (pokeNumber) {
        return tryCache(pokemon, 
                        pokeNumber, 
                        apiUrl + '/pokemon/' + pokeNumber);
    };
    
    function tryCache (cache, key, path) {
        var result = cache.get(key);
         
        if (!result) {
            result = connect(path);
            cache.put(key, result);
        }
        
        return result;
    }

    function connect (path) {
        return $http.get(path);
    }

    return pokeFactory;
};
