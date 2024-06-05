<?php
require("db.php"); 

// 1. Process data from GET
$name = $_GET["name"];
$budget = $_GET["budget"]; 

// 2. Insert data into database
$sql = "insert into amj426_profiles (name, budget) "
        . "           values ('$name', $budget) "; 
// echo $sql; 
$n = $db->exec($sql); 

// 3. Return data (status) of the database operation
header("Content-Type: text/plain"); 
header("Access-Control-Allow-Origin: *");
echo $n; 