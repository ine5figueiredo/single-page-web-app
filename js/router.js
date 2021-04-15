define(function(){

    var internals = {};
    var externals = {};

    internals.routes = {
        list: { hash: '#list', controller: 'list-controller' },
        gryffindor: {hash: '#gryffindor', controller: 'house-controller'},
        hufflepuff: {hash: '#hufflepuff', controller: 'house-controller'},
        ravenclaw: {hash: '#ravenclaw', controller: 'house-controller'},
        slytherin: {hash: '#slytherin', controller: 'house-controller'}
    }

    internals.defaultRoute = internals.routes.list;

    internals.initController = function(route) {
        require(['controller/' + route.controller], function(controller){
            controller.init()
        })
    }

    internals.getRoute = function() {
        console.log(window.location.hash);
        return Object.values(internals.routes).find(function(route) {
            return route.hash === window.location.hash
        })
    }

    externals.init = function() {

        $('#gryffindor').click(() => window.location.hash = 'gryffindor')
        $('#hufflepuff').click(() => window.location.hash = 'hufflepuff')
        $('#ravenclaw').click(() => window.location.hash = 'ravenclaw')
        $('#slytherin').click(() => window.location.hash = 'slytherin')

        window.onhashchange = function() {

            console.log("changed!!!!")

            try{
                internals.initController(internals.getRoute() || internals.defaultRoute);

            } catch(error){
                window.location.hash = internals.defaultRoute;
            }
        }

        
        $(window).scroll(function() {

            require(['controller/list-controller'], function(controller){
                controller.init();
            })
            //internals.initController(internals.getRoute() || internals.defaultRoute);
        
       })
    }

    return externals;
});