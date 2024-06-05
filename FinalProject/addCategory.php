<?php
require("db.php"); 

// 1. Process data from GET
$user = $_GET["user"];
$cat = $_GET["cat"]; 

// 2. Insert data into database
$sql = "insert into amj426_categories (user, cat) "
        . "           values ($user, '$cat') "; 
// echo $sql; 
$n = $db->exec($sql); 

// 3. Return data (status) of the database operation
header("Content-Type: text/plain"); 
header("Access-Control-Allow-Origin: *");
echo $n; 