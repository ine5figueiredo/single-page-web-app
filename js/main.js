require.config({
    baseUrl: './js'
})

require(['router'], function(router) {

    $(document).ready(router.init);

    console.log("Main started!")
})