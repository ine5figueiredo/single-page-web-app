define(function() {

    var internals = {};
    var externals = {};


    internals.getList = function() {

        var api = 'http://hp-api.herokuapp.com/api/characters/house/';

        var house = window.location.hash.substring(1)

        return fetch(api + house);
    }

    externals.list = function() {
        return internals.getList();
    }
    
    return externals;
});