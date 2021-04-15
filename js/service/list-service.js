define(function() {

    var internals = {};
    var externals = {};


    internals.getList = function() {

        var api = 'http://hp-api.herokuapp.com/api/characters';

        return fetch(api);
    }

    externals.list = function() {
        return internals.getList();
    }
    
    return externals;
});