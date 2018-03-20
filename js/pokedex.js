var pokeApp = angular.module('pokedex', ['ngResource']);

// With this you can inject POKEAPI url wherever you want
pokeApp.constant('POKEAPI', 'http://pokeapi.co');

pokeApp.config(['$resourceProvider', function($resourceProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;
}]);

pokeApp.controller('ExampleController', ['$scope',
        function($scope) {
    var _name = "Brian";
    $scope.pokemon = {
        name: function(newName) {
            // Note that newName can be undefined for two reasons:
            // 1. Because it is called as a getter and thus called with no arguments
            // 2. Because the property should actually be set to undefined. This happens e.g. if the
            //    input is invalid
            return arguments.length ? (_name = newName) : _name;
        }
    };
}]);