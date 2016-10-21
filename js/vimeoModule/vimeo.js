(function() {
'use strict';

function vimeo($http) {

    var service = {
        getData: getData,
        getId: getId,
        isValid: isValid
    };

    return service;

    function getId(url) {

        var config = {
                idLength: 9,
                regExp: /https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/,
                matchedNum: 3
            },
            videoId,
            matched;

        if (url.length === config.idLength) {
            return url;
        }
        matched = url.match(config.regExp);
        videoId = (matched && matched[config.matchedNum].length === config.idLength) ? matched[config.matchedNum] : false;
        if (videoId && isValid(videoId)) {
            return videoId;
        }
    }

    function isValid(url) {
        var regexp = /[0-9]/,
            id = getId(url);
        if (id && id.match(regexp)) {
            return true;
        }
    }

    function getData(url) {
        var BASE_API_URL = 'http://vimeo.com/api/v2/video/',
            API_FILTER = '.json',
            videoid = getId(url),
            promise,
            uniwersalMovieObj;

        promise = $http.get(BASE_API_URL + videoid + API_FILTER)
            .success(function (response) {
            })
            .error(function (error) {
                alert("błąd vimeo to: " + error);
            });
       
        uniwersalMovieObj = promise.then(function(response) {
            var movieObj = {
                title: response.data[0].title,
                description: response.data[0].description,
                thumbUrl: response.data[0].thumbnail_medium,
                videoid: response.data[0].id,
                favorite: false,
                viewCount: response.data[0].stats_number_of_plays,
                likeCount: response.data[0].stats_number_of_likes,
                date: new Date().toJSON().slice(0, 10),
                link: url
            };
            return movieObj;
        });

        return uniwersalMovieObj;
    }

}

angular.module('vimeoApp').factory('vimeo', ['$http', vimeo]);
})();