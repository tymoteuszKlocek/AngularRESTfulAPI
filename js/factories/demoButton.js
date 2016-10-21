(function() {
'use strict';

function demo(dataReceiver, $q, movieStorage) {
    
    var service = {
        demoAction: demoAction
    };

    return service;

    function demoAction() {
        var videoIdArray = [
            'C-Gyl_Gf0Xo', 'XvvimYZScN0', '169309392', 'ENXvZ9YRjbo', 's88r_q7oufE', '168263504'];

        for (var i = 0; i<videoIdArray.length; i++) {
            dataReceiver.getData(videoIdArray[i])
                .then(function (data){
                    movieStorage.addToArray(data);
                });
        }

        alert("You've added " + videoIdArray.length + " demo movies to the list");
    }

}

angular.module('myApp').factory('demo',['dataReceiver', '$q', 'movieStorage', demo]);
})();