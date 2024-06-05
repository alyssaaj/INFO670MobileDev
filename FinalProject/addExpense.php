<?php
require("db.php"); 

// 1. Process data from GET
$user = $_GET["user"];
$item = $_GET["item"]; 
$category = $_GET["category"];
$price = $_GET["price"]; 

// 2. Insert data into database
$sql = "insert into amj426_expenses (user, item, category, price) "
        . "           values ($user, '$item', '$category', $price) "; 
// echo $sql; 
$n = $db->exec($sql); 

// 3. Return data (status) of the database operation
header("Content-Type: text/plain"); 
header("Access-Control-Allow-Origin: *");
echo $n; 