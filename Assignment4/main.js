$(document).ready(function(){
    console.log("page");

    $("#addQuestion").click(function(){
        // 1. get values from inputs
        var question = $("#question").val(); 
        var answer = $("#answer").val(); 

        // 2. send GET request to addProduct API
        var serverURL = "addQuestion.php?question=" + question
                        + "&answer=" + answer; 

        // 3. get data through the callback function
        $.get(serverURL, function(data, status){
            console.log("data and status:", data, status); 
            reload();
        });
   });

 
});

$(window).on('load', reload());

function reload() {
    console.log("reload");
    $.get("getQuiz.php", function(data, status){
        console.log(data); 
        $("#list").children().remove();
        $.each(data, function(index, record){
            var question = record["question"]; 
            var answer = record["answer"]; 
            $("#list").append("<li>" + question + ": " + answer + "</li>"); 
        }); 
    
    }); 
}