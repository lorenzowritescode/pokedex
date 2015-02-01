'use strict';

/**
 * @ngdoc function
 * @name pokedexApp.controller:PokectrlCtrl
 * @description
 * # PokectrlCtrl
 * Controller of the pokedexApp
 */
angular.module('pokedexApp')
.controller('PokeCtrl', 
            ['$scope', 
             'PokemonFactory', 
             '$routeParams', 
             'utility',
             'ngTableParams',
             '$filter',
             PokeCtrl 
            ]);

function PokeCtrl ($scope, PokeFactory, $routeParams, utility, ngTableParams, $filter) {
    /* Initialize pokeData */
    $scope.pokeData = {
        moves: [],
        evolutions: []
    };
    /* Alias for moves */
    $scope.moves = $scope.pokeData.moves;
    
    /* Request PokeData from factory */
    PokeFactory.getPokemon($routeParams.pokeNumber)
    .success(function (data) {
        $scope.pokeData= data;
        console.log($scope.movesTable);
    });

    /* Function used to route to other resources */
    $scope.navigate = function (resourceUri) {
        utility.changeView(resourceUri);
    };
};
