(function() {
'use strict';

    function DialogCtrl($mdDialog, $mdMedia, SharedService, $scope) {
        var vm = this;
        vm.videoid = SharedService.getPropertyVideoid();
        vm.customFullscreen = $mdMedia('xs') || $mdMedia('sm');
        vm.showAlert = function (ev) {
            $mdDialog.show(
                $mdDialog.alert()
                .parent(angular.element(document.querySelector('#popupContainer')))
                .clickOutsideToClose(true)
                .targetEvent(ev)
            );
        };
      
        vm.showAdvanced = function(ev) {
            var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && vm.customFullscreen;
            $mdDialog.show({
                controller: DialogController,
                templateUrl: 'view/modalTemplate.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose:true,
                fullscreen: useFullScreen
            });
        }; 
    }

    function DialogController($mdDialog) {
        var vm = this;
    }

    angular.module('myApp').controller('DialogCtrl', ['$mdDialog', '$mdMedia', 'SharedService','$scope',  DialogCtrl]);
})();