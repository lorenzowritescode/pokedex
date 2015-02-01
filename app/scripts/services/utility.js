'use strict';

/**
 * @ngdoc service
 * @name pokedexApp.utility
 * @description
 * # utility
 * Service in the pokedexApp.
 */
angular.module('pokedexApp')
    .service('utility', ['$location', function ($location) {
        // Lord forgive me for this function
        this.extractID = function (resourceURI) {
            var removeTrailingSlash = resourceURI.substring(0, resourceURI.length - 1),
                breakpoint = removeTrailingSlash.lastIndexOf('/');
            return removeTrailingSlash.substring(breakpoint + 1);
        }
        
        this.changeView = function (resourceURI) {
            $location.path('poke/' + this.extractID(resourceURI));
        };
    }]);
