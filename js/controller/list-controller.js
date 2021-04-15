define(['view/list-view', 'service/list-service'], function(view, service) {
    
    var externals = {};
    var internals = {};

    internals.scrolled = false;
    
    externals.init = function() {

        if(internals.scrolled) {
           return;
           
        } else {
            internals.scrolled = true;
        }

        var result = service.list().then(parseResponse);

        function parseResponse(response) {
            return response.json();
        }
        
        view.show(result);
    }
    return externals;
})