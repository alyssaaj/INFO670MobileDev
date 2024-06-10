<?php
require("db.php"); 

$name = $_GET["name"];
// 1. Query database for records in "amj426_profiles" 
$query = "select * from amj426_profiles WHERE name='".$name."'"; 
// echo $query; 
$users = $db->query($query); 

// 2. Output the records in JSON
header("Content-Type: application/json"); 
header("Access-Control-Allow-Origin: *");
echo json_encode($users->fetchAll(PDO::FETCH_ASSOC)); 