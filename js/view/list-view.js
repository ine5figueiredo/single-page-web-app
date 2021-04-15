define(function() {

    var externals = {};

    externals.show = function(response) {

        console.log(response);

        var div = document.getElementById('container');

        response.then((data) => {

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