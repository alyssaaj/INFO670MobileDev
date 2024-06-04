<?php
require("db.php"); 

// 1. Query database for records in "amj426_assignment4" 
$query = "select * from amj426_assignment4"; 
// echo $query; 
$quiz = $db->query($query); 

// 2. Output the records in JSON
header("Content-Type: application/json"); 
header("Access-Control-Allow-Origin: *");
echo json_encode($quiz->fetchAll(PDO::FETCH_ASSOC)); 