(function() {
    "use strict";

    // @desc player - directive that can be used enywher across apps
    // @example <palyer></palyer>

    function player($sce, SharedService) {
        var directive = {
            restrict: 'EA',
            scope: {
                source: '@',
                width: '@',
                height: '@'
            },
            link: function ($scope, $element, $attrs) {
                $scope.videoid = SharedService.getPropertyVideoid();
                $scope.$watch('source', function (n) { 

                    var VIMEO_API_URL = "//player.vimeo.com/video/",
                        YT_API_URL = "http://www.youtube.com/embed/",
                        YT_VIDEOID_LENGTH = 11,
                        VIMEO_VIDEOID_LENGTH = 9,
                        embedUrl = "",
                        youtubeParams = '?autoplay=1',
                        vimeoParams = '?autoplay=1',
                        newVal = n;

                    if (newVal.length == VIMEO_VIDEOID_LENGTH) {
                        embedUrl = VIMEO_API_URL + newVal + vimeoParams;
                    }
                    if (newVal.length == YT_VIDEOID_LENGTH) {
                        embedUrl = YT_API_URL + newVal + youtubeParams;
                    }   
                    $scope.url = $sce.trustAsResourceUrl(embedUrl);
                });
            },
            templateUrl: "./view/player-directive.html",
        };
        return directive;
    }

    angular
        .module('myApp')
        .directive("player", ['$sce', 'SharedService', player]);
})();