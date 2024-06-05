<?php
require("db.php"); 

// 1. Query database for records in "amj426_expenses" 
$query = "select * from amj426_expenses"; 
// echo $query; 
$expenses = $db->query($query); 

// 2. Output the records in JSON
header("Content-Type: application/json"); 
header("Access-Control-Allow-Origin: *");
echo json_encode($expenses->fetchAll(PDO::FETCH_ASSOC)); 