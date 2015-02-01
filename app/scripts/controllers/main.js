'use strict';

/**
 * @ngdoc function
 * @name pokedexApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pokedexApp
 */
angular.module('pokedexApp')
  .controller('MainCtrl', 
              ['$scope', 
               'PokemonFactory', 
               '$location', 
               'utility', 
    function ($scope, PokemonFactory, $location, utility) {
      PokemonFactory.getAll()
        .success(function (data) {
            $scope.pokemons = data.pokemon;
            $scope.pokemons.forEach( function (val) {
                val.id = utility.extractID(val['resource_uri']);
            });
        })
        .error(function (err) {
          window.alert(err.message);
        });
      
      $scope.changeView = function(resourceUri) {
          utility.changeView(resourceUri);
      }

  }]);
