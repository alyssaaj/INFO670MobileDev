<?php
require("db.php");

$user = $_GET["user"];
// 1. Query database for records in "amj426_categories" 
$query = "select * from amj426_categories WHERE user='".$user."'";
// echo $query; 
$categories = $db->query($query); 

// 2. Output the records in JSON
header("Content-Type: application/json"); 
header("Access-Control-Allow-Origin: *");
echo json_encode($categories->fetchAll(PDO::FETCH_ASSOC)); 