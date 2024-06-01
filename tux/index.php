<?php
$dsn = "mysql:host=bvm25.cci.drexel.edu;dbname=wk77_INFO300_202103";
$username = "wk77";
$password = "dee4JaeL-oSau5Kai-eeG0AuF6";

$db = new PDO($dsn, $username, $password);
$query = "select * from wk77_products";
$products = $db->query($query);

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
?>


<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>My PHP Page on Tux</title>
    </head>
    <body>
        Welcome! My PHP page on Tux server!
        <table>
        <?php
            // foreach ($products as $p){
            //     echo $p["name"];
            //     echo $p["cat_id"];
            //     echo $p["price"];
            // }

            // echo "<h1>Title</h1>";
            // echo "<p>first paragraph</p>";
            // echo "<p>second one</p>";
            foreach ($products as $p){
                echo "<tr>";
                echo "<td>" . $p["name"] . "</td>";
                echo "<td>" . $p["cat_id"] . "</td>";
                echo "<td>" . $p["price"] . "</td>";
                echo "</tr>";
            }
        ?>

        </table>
    </body>
</html>