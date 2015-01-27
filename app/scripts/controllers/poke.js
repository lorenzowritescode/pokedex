'use strict';

/**
 * @ngdoc function
 * @name firetodoApp.controller:PokectrlCtrl
 * @description
 * # PokectrlCtrl
 * Controller of the firetodoApp
 */
angular.module('firetodoApp')
  .controller('PokeCtrl', ['$scope', 'PokemonFactory', '$routeParams', function ($scope, PokeFactory, $routeParams) {
      PokeFactory.getPokemon($routeParams.pokeNumber)
        .success(function (data) {
           $scope.pokeData= data;
        });
  }]);
