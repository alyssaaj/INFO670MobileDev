$(document).ready(function(){
    $("#addUser").click(function(){
        // 1. get values from inputs
        var name = $("#name").val(); 
        var budget = $("#budget").val(); 

        // 2. send GET request to addProduct API
        var serverURL = "addUser.php?name=" + name
                        + "&budget=" + budget;

        // 3. get data through the callback function
        $.get(serverURL, function(data, status){
            console.log("data and status:", data, status); 
            $("#status").text(data + ", " + status); 
        });
    });

    $("#addExpense").click(function(){
        // 1. get values from inputs
        var user = $("#user1").val(); 
        var item = $("#item").val(); 
        var category = $("#category").val(); 
        var price = $("#price").val(); 

        // 2. send GET request to addProduct API
        var serverURL = "addExpense.php?user=" + user
                        + "&item=" + item + "&category=" 
                        + category + "&price=" + price;

        // 3. get data through the callback function
        $.get(serverURL, function(data, status){
            console.log("data and status:", data, status); 
            $("#status").text(data + ", " + status); 
        });
    });

    $("#addCategory").click(function(){
        // 1. get values from inputs
        var user = $("#user2").val(); 
        var cat = $("#cat").val(); 

        // 2. send GET request to addProduct API
        var serverURL = "addCategory.php?user=" + user
                        + "&cat=" + cat;

        // 3. get data through the callback function
        $.get(serverURL, function(data, status){
            console.log("data and status:", data, status); 
            $("#status").text(data + ", " + status); 
        });
    });

    $("#updateUser").click(function(){
        // 1. get values from inputs
        var name = $("#nameU").val(); 
        var budget = $("#budgetU").val(); 

        // 2. send GET request to addProduct API
        var serverURL = "updateUser.php?name=" + name
                        + "&budget=" + budget;

        // 3. get data through the callback function
        $.get(serverURL, function(data, status){
            console.log("data and status:", data, status); 
            $("#status").text(data + ", " + status); 
        });
    });


    $("#btnReload").click(function(){
        $.get("getUser.php", function(data, status){
            console.log(data); 
            $.each(data, function(index, record){
                var name = record["name"]; 
                var budget = record["budget"]; 
                $("#profile-list").append("<li>" + name + ", " + budget + "</li>"); 
            }); 

        }); 

        $.get("getExpensesByUser.php", function(data, status){
            console.log(data); 
            $.each(data, function(index, record){
                var user = record["user"]; 
                var item = record["item"]; 
                var category = record["category"]; 
                var price = record["price"]; 
                $("#expense-list").append("<li>" + user + ", " + item + ", " + category + ", " + price + "</li>"); 
            }); 

        }); 


        $.get("getCategoriesByUser.php?user=1", function(data, status){
            console.log(data); 
            $.each(data, function(index, record){
                var user = record["user"]; 
                var cat = record["cat"]; 
                $("#category-list").append("<li>" + user + ", " + cat + "</li>"); 
            }); 

        }); 
    }); 
});



