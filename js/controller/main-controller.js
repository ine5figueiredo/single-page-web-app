define(['view/main-view',], function(view) {
    
    var externals = {};
    
    externals.init = function() {


        
        var result = service.list().then(parseResponse);

        function parseResponse(response) {
            return response.json();
        }
        
        view.show();
    }
    return externals;
})