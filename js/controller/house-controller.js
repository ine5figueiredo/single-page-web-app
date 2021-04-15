define(['view/house-view', 'service/house-service'], function(view, service) {
    
    var externals = {};
    
    externals.init = function() {
        
        var result = service.list().then(parseResponse);

        function parseResponse(response) {
            return response.json();
        }
        
        view.show(result);
    }
    return externals;
})