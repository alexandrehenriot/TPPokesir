var pokeApp = angular.module('pokedex', ['ngResource']);

// With this you can inject POKEAPI url wherever you want
pokeApp.constant('POKEAPI', 'http://pokeapi.co');

pokeApp.config(['$resourceProvider', function($resourceProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;
}]);

// pokeApp.controller('ExampleController', ['$scope',
//         function($scope) {
//     var _id = '1';
//     $scope.pokemon = {
//         id: function(newId) {
//             return arguments.length ? (_id = newId) : _id;
//         }
//     };
// }]);

pokeApp.controller('RecherchePokemon', ['$scope',
    function($scope) {

        var idPokemonSelectionne="";

        $scope.majPokemon= {
            pokemonmodel:"0",
            pokemons:[
                {id: 0, name: 'Bulbizarre', type: 'Plante', niveau: 12},
                {id: 1, name: 'Reptincelle', type: 'Feu', niveau: 23},
                {id: 2, name: 'Pikachu', type: 'Electricité', niveau: 49},
                {id: 3, name: 'Magicarpe', type: 'Normal', niveau: 78},
                {id: 4, name: 'Newtwo', type: 'Psy', niveau: 99}
            ]
        };

        $scope.clickEvent = function(id){
            $scope.idPokemonSelectionne=id;
        };

        $scope.donnerbonbon = function() {
            $scope.pokemons.forEach(function(el) {
                el.niveau = el.niveau + 1;
            });
        };


    }]);