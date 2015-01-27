'use strict';

/**
 * @ngdoc function
 * @name firetodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the firetodoApp
 */
angular.module('firetodoApp')
  .controller('MainCtrl', ['$scope', 'PokemonFactory', '$location', function ($scope, PokemonFactory, $location) {
      PokemonFactory.getAll()
        .success(function (data) {
            $scope.pokemons = data.pokemon;
        })
        .error(function (err) {
          alert(err.message);
        });
      
      $scope.changeView = function (resourceURI) {
          console.log(extractID(resourceURI));
          $location.path('poke/' + extractID(resourceURI));
      }
      
      // Lord forgive me for this function
      function extractID (resourceURI) {
          var removeTrailingSlash = resourceURI.substring(0, resourceURI.length - 1);
          var breakpoint = removeTrailingSlash.lastIndexOf('/');
          return removeTrailingSlash.substring(breakpoint + 1);
      }
  }]);
