define(function() {

    var externals = {};

    externals.show = function(response) {        

        var div = document.getElementById('box');
        
        var scroll = document.getElementById('scroll');

        if (scroll) {
            scroll.remove();
        }

        response.then((data) => {
            div.innerHTML = "";
            for (var key in data) {

            div.innerHTML += "<div class='card' style='width: 18rem;'>"
            + "<img class='picture' src='" + data[key].image + "' class='card-img-top'>"
            + " <div class='card-body'>"
            + "<h5 class='card-title'>" + data[key].name + "</h5>"
            + "<p class='card-text'>Hot dam!</p>"
            + "<a href='#' class='btn btn-primary'>Go somewhere</a>"
            + "</div></div>"   
        }
        })
    }
    return externals;
})