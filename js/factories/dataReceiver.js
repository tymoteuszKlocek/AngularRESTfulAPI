(function() {
'use strict';

function dataReceiver(youtube, vimeo) { 
    var service = {
        getData: getData
    };
    return service;
    function getData(url) {
        var videoService = [youtube, vimeo];
        for (var i = 0; i < videoService.length; i++) {
            if (videoService[i].isValid(url)) {
                return videoService[i].getData(url);
            }
        }
    }
}

angular.module("myApp").factory("dataReceiver", ['youtube', 'vimeo', dataReceiver]);

})();