<?php
require("db.php"); 

// 1. Process data from GET
$question = $_GET["question"];
$answer = $_GET["answer"]; 

// 2. Insert data into database
$sql = "insert into amj426_assignment4 (question, answer) "
        . "           values ('$question', '$answer') "; 
// echo $sql; 
$n = $db->exec($sql); 

// 3. Return data (status) of the database operation
header("Content-Type: text/plain"); 
header("Access-Control-Allow-Origin: *");
echo $n; 