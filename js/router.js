define(function(){

    var internals = {};
    var externals = {};

    internals.routes = {
        main: {hash: '#main', controller: 'main-controller'},
        list: { hash: '#list', controller: 'list-controller' },
        //character: { hash: '#character', controller: 'character' }
    }

    internals.defaultRoute = internals.routes.list;

    internals.initController = function(route) {
        require(['controller/' + route.controller], function(controller){
            controller.init()
        })
    }

    internals.getRoute = function() {
        return Object.values(internals.routes).find(function(route) {
            return route.hash === window.location.hash
        })
    }

    externals.init = function() {

         $(window).scroll(function() {
            console.log("controller")

        internals.initController(internals.getRoute() || internals.defaultRoute);

        window.onhashchange = function() {

            try{
                internals.initController(internals.getRoute());

            } catch(error){
                window.location.hash = internals.defaultRoute;
                
            }
        }
            
   })

        /*console.log("controller")

        internals.initController(internals.getRoute() || internals.defaultRoute);

        window.onhashchange = function() {

            try{
                internals.initController(internals.getRoute());

            } catch(error){
                window.location.hash = internals.defaultRoute;
                
            }
        }*/
    }

    return externals;
});