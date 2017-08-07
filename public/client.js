
$(document).ready(function(){
    $.ajax ({
        method: "GET",
        url: "/random",
        success: function (response) {
            console.log(response);
            $("#number").text(response.randomNumber);
        }
    });
});