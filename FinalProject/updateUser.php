<?php
require("db.php"); 

// 1. Process data from GET
$name = $_GET["name"];
$budget = $_GET["budget"]; 

// 2. Insert data into database
$sql = "UPDATE amj426_profiles SET name='".$name."', budget=".$budget." WHERE id=1";
header("Content-Type: text/plain"); 
header("Access-Control-Allow-Origin: *");

// Prepare statement
$stmt = $db->prepare($sql);

// execute the query
$stmt->execute();

// echo a message to say the UPDATE succeeded
echo $stmt->rowCount() . " records UPDATED successfully";

