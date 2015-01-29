'use strict';

/**
 * @ngdoc function
 * @name pokedexApp.controller:PokectrlCtrl
 * @description
 * # PokectrlCtrl
 * Controller of the pokedexApp
 */
angular.module('pokedexApp')
  .controller('PokeCtrl', ['$scope', 'PokemonFactory', '$routeParams', function ($scope, PokeFactory, $routeParams) {
      PokeFactory.getPokemon($routeParams.pokeNumber)
        .success(function (data) {
           $scope.pokeData= data;
        });
  }]);
