(function() {
'use strict';

function SharedService() {
    var _videoid, _pageSize;
    var service = {
        videoid: _videoid,
        getPropertyVideoid: _getPropertyVideoid,
        setPropertyVideoid: _setPropertyVideoid,
        setPropertyPageSize: _setPropertyPageSize,
        getPropertyPageSize: _getPropertyPageSize
    };
    return service;
    
    function _setPropertyVideoid(value) { 
        _videoid = value;
    }

    function _getPropertyVideoid() { 
        return _videoid;
    }

    function _setPropertyPageSize(value) { 
        _pageSize = value;
    }

    function _getPropertyPageSize() { 
        return _pageSize;
    }

}

angular.module('myApp').factory('SharedService', [SharedService]);
})();