(function() {
'use strict';
    angular
        .module('myApp', [
            'ngMaterial',
            'ngStorage',
            'ngAnimate',
            'ui.router'
        ])
        .config(config);

        function config ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise("/");

            $stateProvider
                .state('home', {
                    url: "/",
                    templateUrl: "partials/myList.html"
                });

            $stateProvider
                .state('list', {
                    url: "/list",
                    templateUrl: "partials/myList.html",
                });

            $stateProvider
                .state('grid', {
                    url: "/grid",
                    templateUrl: "partials/myGrid.html",
                });

            $stateProvider
                .state('player', {
                    url: "/player/:videoId",
                    templateUrl: "partials/playerView.html",
                    controller: PlayerViewController,
                    controllerAs: "player"
                });
        }

        function PlayerViewController($stateParams, SharedService) {
            var vm = this;
            vm.videoId = $stateParams.videoId;
        }

})();