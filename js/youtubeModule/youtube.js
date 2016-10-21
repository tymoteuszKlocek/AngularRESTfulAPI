(function() {
'use strict';

function youtube($http) {

    var service = {
        getId: getId,
        getData: getData,
        isValid: isValid
    };

    return service; 

    function getData(url) {
        var API_KEY = 'AIzaSyCeZ_ijxCc_QKVvugAW_y86j6w5ImALaos',
            BASE_API_URL = 'https://www.googleapis.com/youtube/v3/videos?id=',
            KEYWORD = '&key=',
            API_FILTER = '&part=snippet,statistics',
            videoid = getId(url),
            promise,
            uniwersalMovieObj;

        promise = $http.get(BASE_API_URL + videoid + KEYWORD + API_KEY + API_FILTER)
            .success(function (response) { 
            })
            .error(function (error) {
                alert("błąd yt to: " + error);
            });

        uniwersalMovieObj = promise.then(function (response) {
            var movieObj = {
                title: response.data.items[0].snippet.title,
                description: response.data.items[0].snippet.description,
                thumbUrl: response.data.items[0].snippet.thumbnails.high.url,
                videoid: response.data.items[0].id,
                favorite: false,
                viewCount: response.data.items[0].statistics.likeCount,
                likeCount: response.data.items[0].statistics.viewCount,
                date: new Date().toJSON().slice(0, 10),
                link: url
            };
            return movieObj;
        });
        return uniwersalMovieObj;
    }

    function isValid(url) {
        var regexp = /[0-9a-z]/,
            id = getId(url);
        if (id && id.match(regexp)) {
            return true;
        }
    }

    function getId(url) {

        var config = {
                idLength: 11,
                regExp: /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/,
                matchedNum: 7
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


}

angular.module("ytApp").factory("youtube", ['$http', youtube]);
})();