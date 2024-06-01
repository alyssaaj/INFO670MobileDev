$(document).ready(function () {
    $("#validate").click(function(){
        var email = $("#email").val();
        var name = $("#fullname").val();

        if(email==""){
            $("#email").next().text("Email is required");
        }else{
            $("#email").next().text("Valid entry: " + email); 
        }
    });
});