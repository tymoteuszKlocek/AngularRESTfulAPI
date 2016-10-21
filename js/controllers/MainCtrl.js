(function() {
'use strict';

    function MainCtrl(SharedService, dataReceiver, movieStorage, favorites, demo, $state) {

        var vm = this;
        vm.addToFavorites = addToFavorites;
        vm.currentPage = 0;
        vm.data = movieStorage.movieArray || 0;
        vm.deleteItem = deleteItem;
        vm.deleteStorage = deleteStorage;
        vm.demoButton = demoButton;
        vm.movies = movieStorage.movieArray || [];
        vm.movieObj;
        vm.numberOfPages = numberOfPages;
        vm.pageSize = 5;
        vm.takeThisVideoid = takeThisVideoid;
        vm.takeThisVideoidForParams = takeThisVideoidForParams;
        vm.useUrl = useUrl;
        vm.video; 

        // main menu buttons:
        function useUrl() {
            if (vm.pastedUrl) {
                vm.video = {
                    videoId: vm.pastedUrl
                };
                getMovie(); 
            }
        }

        function getMovie() {
            return dataReceiver.getData(vm.video.videoId).then(function (data) {
                movieStorage.addToArray(data);
            });
        }

        function deleteStorage() {
            movieStorage.clearMyStorage();
        }

        function deleteItem(movie) {
            var index = vm.movies.indexOf(movie);
            movieStorage.deleteItemFromArray(index);
        }

        function addToFavorites(movie) {
            favorites.changeFavorite(movie);
        }

        function takeThisVideoid(movie) {
            console.log(movie.videoid);
            SharedService.setPropertyVideoid(movie.videoid);
            return movie.videoid;
        }

        function takeThisVideoidForParams(movie) {
            $state.go('player', {videoId: movie.videoid});
            console.log(movie.videoid);
        }
        // ------------ paginacja --------------
        function numberOfPages() {
            SharedService.setPropertyPageSize(vm.pageSize);
            return Math.ceil(vm.data.length / vm.pageSize);
        }
        // -------------- demo - pozwala wgrać przykładowe filmiki ------------------
        function demoButton() {
            demo.demoAction();
        }
    }

    angular.module('myApp').controller('MainCtrl', ['SharedService', 'dataReceiver', 'movieStorage', 'favorites', 'demo', '$state', MainCtrl]);
})();