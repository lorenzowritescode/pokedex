'use strict';

/**
 * @ngdoc function
 * @name firetodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the firetodoApp
 */
angular.module('firetodoApp')
  .controller('MainCtrl', ['$scope', 'PokemonFactory', function ($scope, PokemonFactory) {
      PokemonFactory.getPokemons()
        .success(function (data) {
            $scope.pokemons = data.pokemon;
        })
        .error(function (err) {
          alert(err.message);
        });
  }]);
