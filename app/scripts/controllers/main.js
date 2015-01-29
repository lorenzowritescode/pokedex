'use strict';

/**
 * @ngdoc function
 * @name pokedexApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pokedexApp
 */
angular.module('pokedexApp')
  .controller('MainCtrl', ['$scope', 'PokemonFactory', '$location', function ($scope, PokemonFactory, $location) {
      PokemonFactory.getAll()
        .success(function (data) {
            $scope.pokemons = data.pokemon;
            $scope.pokemons.forEach( function (val) {
                val.id = extractID(val['resource_uri']);
            });
        })
        .error(function (err) {
          window.alert(err.message);
        });
      
      $scope.changeView = function (resourceURI) {
          $location.path('poke/' + extractID(resourceURI));
      };
      
      // Lord forgive me for this function
      function extractID (resourceURI) {
          var removeTrailingSlash = resourceURI.substring(0, resourceURI.length - 1);
          var breakpoint = removeTrailingSlash.lastIndexOf('/');
          return removeTrailingSlash.substring(breakpoint + 1);
      }
  }]);
